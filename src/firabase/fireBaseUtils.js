/** @format */

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
	apiKey: 'AIzaSyD_N8UMDHI60VBGVAkMbB7mMheU1z2H0Yw',
	authDomain: 'crown-3b868.firebaseapp.com',
	databaseURL: 'https://crown-3b868.firebaseio.com',
	projectId: 'crown-3b868',
	storageBucket: 'crown-3b868.appspot.com',
	messagingSenderId: '424956103553',
	appId: '1:424956103553:web:34720648bd998241a83680',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();

export const createDataBaseForUser = async (user, otherData) => {
	const userRef = fireStore.collection('users').doc(`${user.uid}`);
	const userSnapShot = await userRef.get();

	if (userSnapShot.exists) {
		return userRef;
	} else {
		const { displayName, email } = user;

		userRef.set({
			displayName,
			email,
			createdAt: new Date(),
			...otherData,
		});
		return userRef;
	}
};

export const createDataBase = (collectionArray) => {
	collectionArray.forEach((item) => {
		fireStore
			.collection('collections')
			.doc(`${item.title}`)
			.set({
				...item,
			});
	});
};

export const fetchCollectionsFromFireStore = async () => {
	const querySnapshot = await fireStore.collection('collections').get();
	const collections = [];
	querySnapshot.forEach(function (doc) {
		// doc.data() is never undefined for query doc snapshots

		const collection = doc.data();
		collections.push(collection);
	});

	return collections;
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const googleSignIn = () => firebase.auth().signInWithPopup(provider);
export const auth = firebase.auth();
