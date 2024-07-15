import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// function to generate a unique random ids

const generateId = () => {
  const characters = "abcdefghijklmnopqrstuvASSSSKDJJDJ1299#39955%$%$%&'";

  let randomID = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }
  return randomID;
};

// function to create a new  document in the  collection

export const createData = async (collectionName, data) => {
  const id = generateId();
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, { id, ...data });
    return { id, ...data };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// testing data creation

// const testData = {
//   name: "Abdulaziz",
//   age: 35,
//   role: "admin",
// };

// createData("users", testData);

// read data from collection

export const readData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error reading documents: " + error.message);
  }
};

// update collection

export const updateData = async (collection, id, data) => {
  try {
    const docRef = doc(db, collection, id);
    await updateDoc(docRef, { id: id, ...data });
    console.log("Documents updated successfully");
  } catch (error) {
    console.error("Error updating document: ", error.message);
  }
};

// delete document from collection

export const deleteData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document: ", error.message);
  }
};

// get all documents from collection

export const getAllData = async (collectionName) => {
  try {
    const newData = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    return newData;
  } catch (error) {
    console.error("Error getting documents: ", error.message);
  }
};

// listening to any changes to the collection and updating the UI

export const listenCollection = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName);
  return onSnapshot(collectionRef, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    callback(data);
  });
};
