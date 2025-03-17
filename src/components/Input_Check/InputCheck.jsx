import React from 'react'

const InputCheck = (
    {
        Id,
        Label
    }
) => {
  return (
    <>
    <input 
    type="checkbox" 
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