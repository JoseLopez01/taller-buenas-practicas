import { createContext, ReactNode, useContext, useState } from 'react';

export interface CollectionContext {
  collectionId: string;
  isTaskFormOpen: boolean;
  openTaskForm: () => void;
  closeTaskForm: () => void;
  setCollectionId: (collectionId: string) => void;
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
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const openTaskFormHandler = () => {
    setIsTaskFormOpen(true);
  };

  const closeTaskFormHandler = () => {
    setIsTaskFormOpen(false);
  };

  const setCollectionIdHandler = (id: string) => {
    setCollectionId(id);
  };

  return (
    <collectionContext.Provider
      value={{
        collectionId,
        isTaskFormOpen,
        openTaskForm: openTaskFormHandler,
        closeTaskForm: closeTaskFormHandler,
        setCollectionId: setCollectionIdHandler,
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
