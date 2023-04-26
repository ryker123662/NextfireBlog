import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig =
	{
		apiKey: "AIzaSyCc9LM6N9tn6xOWv1sdp7h-tU4FFX-4UKU",
		authDomain:
			"nextfire-1b7cd.firebaseapp.com",
		projectId:
			"nextfire-1b7cd",
		storageBucket:
			"nextfire-1b7cd.appspot.com",
		messagingSenderId:
			"597240808460",
		appId: "1:597240808460:web:211a53d6414e415ce61a29",
	};

if (
	!firebase
		.apps
		.length
) {
	firebase.initializeApp(
		firebaseConfig
	);
}

export const auth =
	firebase.auth();
export const firestore =
	firebase.firestore();
export const storage =
	firebase.storage();
