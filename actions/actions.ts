'use server'

import { auth } from "@clerk/nextjs/server"

export async function createdDocuemt() {
    auth().protect()

    const { sessionClaims } = await auth()
}