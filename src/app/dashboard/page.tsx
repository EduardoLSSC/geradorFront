'use client'
import {useContext} from "react";
import {UserContext} from "@/app/layout";
import {User} from "@/app/page";

interface Tarefa{
    id: number,
    description: String,
    usuario: User
}
export default function Page() {
    const {userLogged} = useContext(UserContext)
    return(
        <h1>{userLogged?.name}</h1>
    )
}