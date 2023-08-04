'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {createContext, useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })
interface User {
    id: number,
    email: String,
    password: String
}

export const metadata: Metadata = {
  title: 'Task Manager'
}

export const UserContext = createContext({})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [userLogged, setUserLogged] = useState<User>()
    useEffect(() => {
        console.log(userLogged)
    },[userLogged])
    return (
    <html lang="en">
      <body className={inter.className}>
      <UserContext.Provider value={{userLogged, setUserLogged}}>
      {children}
      </UserContext.Provider>
      </body>
    </html>
  )
}
