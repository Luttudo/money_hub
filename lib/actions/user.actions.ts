"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        
    } catch (error) {
        console.error("error", error);
        
    }
}

export const signUp = async (userData: SignUpParams) => {
    // destruc syntax
    const { email, password, firstName, lastName } = userData;

    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(),
                email,
                password,
                "${firstName} ${lastName}",
            );
        const session = await account.createEmailPasswordSession(email, password);
    
        cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: false,
    });

        
        return parseStringify(newUserAccount);      
    } catch (error) {
        console.error("error", error);
        
    }
}


export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();

      const user = await account.get();
    
      return parseStringify(user);      
      
    } catch (error) {
      return null;
    }
  }
  