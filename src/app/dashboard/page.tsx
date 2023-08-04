'use client'
import {useContext} from "react";
import {UserContext} from "@/app/layout";
import {bgcolor} from "@mui/system";
import menuLateral from "@/app/components/menu-lateral";
import MenuLateral from "@/app/components/menu-lateral";

interface User {
    id: number
    email: String,
    password: String
}
interface Tarefa{
    id: number,
    description: String,
    usuario: User
}
export default function Page() {
    const {userLogged} = useContext(UserContext)
    return(
        <div>
            <MenuLateral></MenuLateral>
            <div></div>
        </div>

    )
}