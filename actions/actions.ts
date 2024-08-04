'use server'

import { auth } from "@clerk/nextjs/server"

export async function createdDocuemt() {
    auth().practice()

    const {sessionClaim} = await auth()
}