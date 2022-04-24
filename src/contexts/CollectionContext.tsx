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
  deleteCollection,
  FormData,
  getCollections,
  updateCollectionTasks,
} from '../utils/db';

export interface CollectionContext {
  collection: Collection;
  isTaskFormOpen: boolean;
  collections: Collection[];
  setIsTaskFormOpen: (isTaskFormOpen: boolean) => void;
  addCollection: (collection: string) => void;
  addTaskToCollection: (task: FormData) => Promise<void>;
  handleOnDeleteCollection: (collectionId: string) => Promise<void>;
  handleOnDeleteTask: (taskId: string) => Promise<void>;
  handleOnCompleteTask: (taskId: string) => Promise<void>;
  setSelectedCollection: (collectionId: string) => void;
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
  const [collection, setCollection] = useState<Collection>({} as Collection);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collections = await getCollections();
        setCollections(collections);
        setCollection(collections[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, []);

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
      if (collection) {
        const newTask = await addTaskToCollection(collection.id, task);
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

  const handleOnDeleteCollection = async (id: string) => {
    try {
      await deleteCollection(id);
      const updatedCollections = collections.filter(
        (collection) => collection.id !== id
      );
      setCollections(updatedCollections);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDeleteTask = async (taskId: string) => {
    try {
      if (collection) {
        const updatedCollection = {
          ...collection,
          tasks: collection.tasks.filter((task) => task.id !== taskId),
        };
        await updateCollectionTasks(collection.id, updatedCollection.tasks);
        setCollection(updatedCollection);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnCompleteTask = async (taskId: string) => {
    try {
      if (collection) {
        const updatedCollection = {
          ...collection,
          tasks: collection.tasks.map(({ completed, ...task }) => ({
            ...task,
            completed: task.id === taskId ? !completed : completed,
          })),
        };
        await updateCollectionTasks(collection.id, updatedCollection.tasks);
        setCollection(updatedCollection);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setSelectedCollection = (id: string) => {
    const selectedCollection = collections.find(
      (collection) => collection.id === id
    );
    if (selectedCollection) {
      setCollection(selectedCollection);
    }
  };

  return (
    <collectionContext.Provider
      value={{
        collection,
        isTaskFormOpen,
        collections,
        handleOnDeleteCollection,
        handleOnDeleteTask,
        setIsTaskFormOpen,
        setSelectedCollection,
        handleOnCompleteTask,
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
