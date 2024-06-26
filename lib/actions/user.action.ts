"use server";

import User from "@/lib/modals/user.modal"

import { connect } from "@/lib/db"
import { stringify } from "querystring";

export async function createUser(user: any) {
    try {
        await connect();
        const newUser = await User.create(user);
        console.log(newUser);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error);
    }
}