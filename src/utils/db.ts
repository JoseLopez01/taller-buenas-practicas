import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore';

import { nanoid } from 'nanoid';

import { firestore } from '../firebase/firebase';
import { Collection, Task } from '../interfaces/interfaces';

export type FormData = Pick<Task, 'description' | 'name'> & {
  startDate: string;
  endDate: string;
};

const collectionsDocs = collection(firestore, 'collections');

export async function addCollection(
  collectionName: string
): Promise<Collection> {
  const newCollection = await addDoc(collectionsDocs, {
    name: collectionName,
    tasks: [],
  });
  return {
    id: newCollection.id,
    name: collectionName,
    tasks: [],
  };
}

export async function getCollections(): Promise<Collection[]> {
  const docs = await getDocs(collectionsDocs);
  const collections: Collection[] = [];
  docs.forEach((doc) => {
    collections.push({
      id: doc.id,
      name: doc.data().name,
      tasks: doc.data().tasks,
    });
  });
  return collections;
}

export async function addTaskToCollection(
  collectionId: string,
  task: FormData
) {
  const newTask = {
    ...task,
    completed: false,
    id: nanoid(),
  };
  await updateDoc(doc(collectionsDocs, collectionId), {
    tasks: arrayUnion(newTask),
  });
  return newTask;
}

export async function updateTask() {}
