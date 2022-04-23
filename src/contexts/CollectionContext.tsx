import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Collection } from '../interfaces/interfaces';
import { addCollection, getCollections } from '../utils/db';

export interface CollectionContext {
  collectionId: string;
  isTaskFormOpen: boolean;
  openTaskForm: () => void;
  closeTaskForm: () => void;
  setCollectionId: (collectionId: string) => void;
  addCollection: (collection: string) => void;
  collections: Collection[];
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
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collections = await getCollections();
        setCollections(collections!);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, []);

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
      setCollections([...collections, newCollection!]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <collectionContext.Provider
      value={{
        collectionId,
        isTaskFormOpen,
        collections,
        openTaskForm: openTaskFormHandler,
        closeTaskForm: closeTaskFormHandler,
        setCollectionId: setCollectionIdHandler,
        addCollection: addCollectionToDb,
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
