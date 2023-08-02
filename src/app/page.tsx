"use client"
import RINGS from "vanta/dist/vanta.rings.min"
import * as THREE from "three"
import React, { useState, useEffect, useRef } from 'react'
import {styled, TextField} from "@mui/material";

export default function Login() {
    const CssTextField = styled(TextField)({
        '& .MuiInputBase-input': {
            color: '#A0AAB4',
        },
        '& .MuiInputBase:hover': {
            color: "red"
        },
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& label': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFF',
        },
    });
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
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
  return (
      <div ref={myRef} className="h-[100vh] w-[100vw]">
          <div className={"flex flex-col justify-center card h-[100vh] w-[25vw] bg-violet-400 bg-opacity-10 backdrop-blur-md"}>
              <div className={"flex justify-center"}>
                  <h1 className={"text-fuchsia-400 title font-kanit text-4xl font-thin"}>Task Manager</h1>
              </div>
              <form className={"flex flex-col justify-center p-10 w-full gap-4"}>
                  <CssTextField label="Email" type={"email"} variant="standard" />
                  <CssTextField label="Password" type={"password"} variant="standard" />
              </form>
          </div>
      </div>


  )
}
