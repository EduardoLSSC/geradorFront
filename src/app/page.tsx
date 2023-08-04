"use client"
import RINGS from "vanta/dist/vanta.rings.min"
import * as THREE from "three"
import React, {useState, useEffect, useRef, FormEvent, useContext} from 'react'
import {Button, TextField} from "@mui/material";
import {api} from "@/service/api";
import {UserContext} from "@/app/layout";
import {useRouter} from "next/navigation";

interface User {
    email: String,
    password: String
}
export default function Login() {
    const [user, setUser] = useState<User>({id: 0, email: '', password: ''})
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    const {setUserLogged} = useContext(UserContext)
    const router = useRouter()
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(RINGS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff00,
                backgroundColor: 0x0,
                backgroundAlpha: 1
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    async function SearchUser(event: FormEvent) {
        event.preventDefault()
        await api.post("/usuarios/login", {
            email: user.email,
            password: user.password
        }).then(result => {
            setUserLogged(result.data)
            router.push('/dashboard')
        }).catch(() => {
            console.log("não existe")
        })
    }

    return (
        <div ref={myRef} className="h-[100vh] w-[100vw]">
            <div
                className={"flex flex-col justify-center card h-[100vh] w-[25vw] bg-violet-400 bg-opacity-10 backdrop-blur-md"}>
                <div className={"flex justify-center"}>
                    <h1 className={"text-fuchsia-500 font-kanit text-4xl font-thin"}>Task Manager</h1>
                </div>
                <form onSubmit={SearchUser} className={"flex flex-col justify-center p-10 w-full gap-6"}>
                    <TextField sx={{
                        "& label.Mui-focused": {
                            color: "white",
                        },
                        "& .MuiInput-underline:before": {
                            borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white",
                        },
                        "& .MuiFormLabel-root": {
                            color: "white",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "1rem",
                        },
                        "& .MuiInputBase-input": {
                            color: "white",
                            fontFamily: "'Poppins', sans-serif",
                        },
                    }} color={"secondary"} autoComplete={'off'} defaultValue={user.email}
                               onChange={(e) => setUser({email: e.target.value, password: user.password})} label="Email"
                               type={"email"} variant="standard"/>
                    <TextField sx={{
                        "& label.Mui-focused": {
                            color: "white",
                        },
                        "& .MuiInput-underline:before": {
                            borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white",
                        },
                        "& .MuiFormLabel-root": {
                            color: "white",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "1rem",
                        },
                        "& .MuiInputBase-input": {
                            color: "white",
                            fontFamily: "'Poppins', sans-serif",
                        },
                    }} autoComplete={'off'} defaultValue={user.password}
                               onChange={(e) => setUser({password: e.target.value, email: user.email})} label="Password"
                               type={"password"} variant="standard"/>
                    <Button className={"bg-fuchsia-500 hover:bg-fuchsia-600"} variant="contained"
                            type={"submit"}>Login</Button>
                </form>
            </div>
        </div>
    )
}
