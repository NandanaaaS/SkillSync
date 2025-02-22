import { auth, db } from './env.js'; // Import auth and db from env.js
import { setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function updateUserProfile(userId, bio, skills, experienceLevel, availability) {
    console.log("Updating profile for user:", userId);
    try {
        if (!db) {
            throw new Error("Firestore is not initialized.");
        }

        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
            bio,
            skills,
            experienceLevel,
            availability,
            updatedAt: serverTimestamp()
        }, { merge: true });

        console.log("User profile updated successfully!");
    } catch (error) {
        console.error("Error updating profile:", error);
    }
}
