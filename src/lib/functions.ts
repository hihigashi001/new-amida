import firebase from "firebase/compat/app"
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../lib/firebase"

export const dataNow = () => firebase.firestore.Timestamp.fromDate(new Date())

export type StoreData = {
  amidaTitle: string
  amidaValues: string[]
  amidaPlayers: string[]
  amidaBorder: string
  expireDate?: firebase.firestore.Timestamp
}

export async function addAmida(data: StoreData) {
  try {
    const docRef = await addDoc(collection(db, "amidakuji"), data)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function updateAmida(id: string, data: StoreData) {
  try {
    const usersCollection = collection(db, "amidakuji")
    const docRef = doc(usersCollection, id)
    await setDoc(docRef, data)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function getAmida(id: string): Promise<StoreData> {
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
