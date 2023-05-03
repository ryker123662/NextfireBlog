import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCc9LM6N9tn6xOWv1sdp7h-tU4FFX-4UKU",
	authDomain: "nextfire-1b7cd.firebaseapp.com",
	projectId: "nextfire-1b7cd",
	storageBucket: "nextfire-1b7cd.appspot.com",
	messagingSenderId: "597240808460",
	appId: "1:597240808460:web:211a53d6414e415ce61a29",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// Storage exports
export const storage = firebase.storage();

// Helper functions

/*
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
	const userRef = firestore.collection("users");
	const query = userRef.where("username", "==", username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

/*
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		createdAt: data.createdAt.toMillis(),
		updatedAt: data.updatedAt.toMillis(),
	};
}
