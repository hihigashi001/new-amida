import firebase from "firebase/compat/app"
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../lib/firebase"

const now = new Date();
now.setDate(now.getDate() + 7);
export const nextWeek = () => firebase.firestore.Timestamp.fromDate(now)

export type StoreData = {
  amidaTitle: string
  amidaValues: string[]
  amidaPlayers: string[]
  amidaBorder: string
  expireDate?: firebase.firestore.Timestamp
}

export const addAmida = async (data: StoreData) => {
  try {
    const docRef = await addDoc(collection(db, "amidakuji"), data)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const updateAmida = async (id: string, data: StoreData) => {
  try {
    const usersCollection = collection(db, "amidakuji")
    const docRef = doc(usersCollection, id)
    await setDoc(docRef, data)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const getAmida = async (id: string): Promise<StoreData> => {
  try {
    const docRef = doc(db, "amidakuji", id)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()
    if (!data) throw new Error("No data found")
    return data as StoreData
  } catch (e) {
    console.error("Error adding document: ", e)
    throw e
  }
}
