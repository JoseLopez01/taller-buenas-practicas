import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore';

import { firestore } from '../firebase/firebase';
import { Collection, Task } from '../interfaces/interfaces';

export type FormData = Pick<Task, 'description' | 'name'> & {
  startDate: string;
  endDate: string;
};

const collectionsDocs = collection(firestore, 'collections');

export async function addCollection(
  collectionName: string
): Promise<Collection | null> {
  try {
    const newCollection = await addDoc(collectionsDocs, {
      name: collectionName,
      tasks: [],
    });
    return {
      id: newCollection.id,
      name: collectionName,
      tasks: [],
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getCollections(): Promise<Collection[] | null> {
  try {
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
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addTaskToCollection(
  collectionId: string,
  task: FormData
) {
  console.log({ collectionId, task });
  await updateDoc(doc(collectionsDocs, collectionId), {
    tasks: arrayUnion(task),
  });
}
