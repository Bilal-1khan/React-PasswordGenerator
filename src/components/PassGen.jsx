import React, { useEffect, useState,useCallback } from 'react'
import {Container, InputCheck, InputRange} from './index'

const PassGen = () => {
    const [passLength,setPassLength] = useState(5)
    const [number,setNumber] = useState(false)
    const [characters,setCharacters] = useState(false)
    const [uppercase,setUppercase] = useState(false)
    const [lowercase,setLowercase] = useState(false)
    const [password,setPassword] = useState('')

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (number) string += '0123456789'
        if (characters) string += '!@#$%^&*()'
        if (uppercase) string += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (lowercase) string += 'abcdefghijklmnopqrstuvwxyz'

        for (let i = 1; i <= passLength; i++) {
            const char = Math.floor((Math.random()) * (string.length) + 1)
            pass += string.charAt(char)
        }
        setPassword(pass)
      },[passLength,number,characters,uppercase,lowercase,setPassword])
    
      useEffect(()=>{
        passwordGenerator()
      },[passLength,number,characters,uppercase,lowercase,passwordGenerator])

    function handleRange(event) {
        setPassLength(event.target.value)
    }
    function handleNumber() {
        setNumber((prev)=>!prev)
    }
    function handleCharacter() {
        setCharacters((prev)=>!prev)
    }
    function handleUpperCase() {
        setUppercase((prev)=>!prev)
    }
    function handleLowerCase() {
        setLowercase((prev)=>!prev)
    }
  return (
    <Container>
        <div className="passwordBox bg-[#444] px-3 py-5 w-1/2 rounded-xl">
            <div className="top flex justify-center gap-4">
                <input 
                type="text" 
                placeholder='password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='w-[80%] cursor-default p-2 border-none outline-none rounded-xl'
                readOnly
                />
                <button 
                className='px-4 py-2 font-bold rounded-xl cursor-pointer capitalize text-white bg-slate-500'>
                    copy
                </button>
            </div>
            <div className="bottom inline-flex gap-2 flex-wrap  mt-5 mb-2 justify-center">
                <InputRange Label={'length'} range={passLength} onRange={handleRange}/>

                <InputCheck 
                Label={"number"}
                 Id={"number"}
                 isChecked={number}
                 checkInput={handleNumber}
                 />
                <InputCheck 
                Label={"characters"}
                 Id={"characters"}
                 isChecked={characters}
                 checkInput={handleCharacter}
                 />
                <InputCheck 
                Label={"uppercase"}
                 Id={"uppercase"}
                 isChecked={uppercase}
                 checkInput={handleUpperCase}
                 />
                <InputCheck 
                Label={"lowercase"}
                 Id={"lowercase"}
                 isChecked={lowercase}
                 checkInput={handleLowerCase}
                 />
            </div>
        </div>
    </Container>
  )
}

export default PassGen