import React, { useState } from 'react'
import {Container, InputCheck, InputRange} from './index'

const PassGen = () => {
    const [passLength,setPassLength] = useState(5)
    const [number,setNumber] = useState(false)
    const [characters,setCharacters] = useState(false)
    const [uppercase,setUppercase] = useState(false)
    const [lowercase,setLowercase] = useState(false)

    function handleRange(event) {
        setPassLength(event.target.value)
    }
  return (
    <Container>
        <div className="passwordBox bg-[#444] px-3 py-5 w-1/2 rounded-xl">
            <div className="top flex justify-center gap-4">
                <input 
                type="text" 
                placeholder='password' 
                className='w-[80%] p-2 border-none outline-none rounded-xl'/>
                <button 
                className='px-4 py-2 rounded-xl cursor-pointer capitalize text-white bg-slate-500'>
                    copy
                </button>
            </div>
            <div className="bottom inline-flex gap-2 flex-wrap  mt-5 mb-2 justify-center">
                <InputRange Label={'length'} range={passLength} onRange={handleRange}/>

                <InputCheck Label={"number"} Id={"number"}/>
                <InputCheck Label={"characters"} Id={"characters"}/>
                <InputCheck Label={"uppercase"} Id={"uppercase"}/>
                <InputCheck Label={"lowercase"} Id={"lowercase"}/>
            </div>
        </div>
    </Container>
  )
}

export default PassGen