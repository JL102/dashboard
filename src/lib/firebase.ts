// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { addDoc, collection, getDocs, setDoc, writeBatch, getFirestore, doc, } from "firebase/firestore"; 
import type { CsvLayout2024Parsed, CsvLayout2025Parsed } from "./stats";
import assert from "./assert";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-O2q_OfLegDq9wuxcp3tyli6gNiXSfEU",
  authDomain: "aemscout-dashboard-test.firebaseapp.com",
  projectId: "aemscout-dashboard-test",
  storageBucket: "aemscout-dashboard-test.firebasestorage.app",
  messagingSenderId: "1006532513607",
  appId: "1:1006532513607:web:fa8733a43b171df9380662"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);

const csv2024Col = collection(firestore, 'csv2024');
const csv2025Col = collection(firestore, 'csv2025');

export async function uploadCsv2024(csv: CsvLayout2024Parsed[]) {
	console.debug('Creating writeBatch');
	let batch = writeBatch(firestore);
	
	console.debug(`Doing set{} for ${csv.length} items`);
	
	// todo: do i ever need to delete data?
	for (let item of csv) {
		assert(item.key, 'item.key not defined!');
		const docRef = doc(firestore, 'csv2024', item.key);
		batch.set(docRef, item);
	}
	await batch.commit();
}

export async function downloadCsv2024() {
	const querySnapshot = await getDocs(csv2024Col);
	const data = querySnapshot.docs.map(doc => doc.data() as CsvLayout2024Parsed);
	return data;
}

export async function uploadCsv2025(csv: CsvLayout2025Parsed[]) {
	console.debug('Creating writeBatch');
	let batch = writeBatch(firestore);
	
	console.debug(`Doing set{} for ${csv.length} items`);
	
	for (let item of csv) {
		assert(item.key, 'item.key not defined!');
		const docRef = doc(firestore, 'csv2025', item.key);
		batch.set(docRef, item);
	}
	await batch.commit();
}

export async function downloadCsv2025() {
	const querySnapshot = await getDocs(csv2025Col);
	const data = querySnapshot.docs.map(doc => doc.data() as CsvLayout2025Parsed);
	return data;
}