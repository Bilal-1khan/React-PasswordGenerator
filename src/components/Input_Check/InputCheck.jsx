import React from 'react'

const InputCheck = (
    {
        Id,
        Label,
        isChecked,
        checkInput
    }
) => {
  return (
    <>
    <input 
    type="checkbox" 
    defaultChecked={isChecked}
    onChange={()=>checkInput()}
    id={Id} 
    className='mx-3'
    />
    <label 
    className='text-white capitalize cursor-pointer'
    htmlFor={Id}>
        {Label}
    </label>
    </>
  )
}

export default InputCheck