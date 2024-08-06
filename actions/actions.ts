'use server'

import { adminDb } from "@/firebase-admin"
import { auth } from "@clerk/nextjs/server"

export async function createdDocuemt() {
    auth().protect()

    const { sessionClaims } = await auth()

    const docCollectionRef = adminDb.collection('docuemnt')
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email,
        role: "owner",
        createdAt: new Date(),
        rowid: docRef.id
    })
}