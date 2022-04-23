import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Collection } from '../interfaces/interfaces';

import {
  addCollection,
  addTaskToCollection,
  FormData,
  getCollections,
} from '../utils/db';

export interface CollectionContext {
  collection: Collection | null;
  isTaskFormOpen: boolean;
  collections: Collection[];
  collectionId: string | null;
  openTaskForm: () => void;
  closeTaskForm: () => void;
  setCollectionId: (collectionId: string) => void;
  addCollection: (collection: string) => void;
  addTaskToCollection: (task: FormData) => Promise<void>;
}

export interface CollectionContextProps {
  children: ReactNode;
}

const collectionContext = createContext<CollectionContext>(
  {} as CollectionContext
);

export function CollectionContextProvider({
  children,
}: CollectionContextProps) {
  const [collectionId, setCollectionId] = useState('');
  const [collection, setCollection] = useState<Collection | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collections = await getCollections();
        setCollections(collections);
        setCollectionId(collections[0].id!);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const selectedCollection = collections.find(
      (collection) => collection.id === collectionId
    );
    if (selectedCollection) {
      setCollection(selectedCollection);
    }
  }, [collectionId]);

  const openTaskFormHandler = () => {
    setIsTaskFormOpen(true);
  };

  const closeTaskFormHandler = () => {
    setIsTaskFormOpen(false);
  };

  const setCollectionIdHandler = (id: string) => {
    setCollectionId(id);
  };

  const addCollectionToDb = async (collection: string) => {
    try {
      const newCollection = await addCollection(collection);
      setCollections([...collections, newCollection]);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (task: FormData) => {
    try {
      const newTask = await addTaskToCollection(collectionId, task);
      if (collection) {
        const updatedCollection: Collection = {
          ...collection,
          tasks: [newTask, ...collection.tasks],
        };
        setCollection(updatedCollection);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <collectionContext.Provider
      value={{
        collection,
        isTaskFormOpen,
        collections,
        collectionId,
        openTaskForm: openTaskFormHandler,
        closeTaskForm: closeTaskFormHandler,
        setCollectionId: setCollectionIdHandler,
        addCollection: addCollectionToDb,
        addTaskToCollection: addTask,
      }}
    >
      {children}
    </collectionContext.Provider>
  );
}

export function useCollectionContext() {
  const context = useContext(collectionContext);

  if (!context) {
    throw new Error(
      'useCollectionContext must be used within a CollectionContextProvider'
    );
  }

  return context;
}
