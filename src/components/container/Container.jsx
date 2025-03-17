import React from 'react'

const Container = ({children}) => {
  return (
    <>
    <div className='w-full h-screen bg-[#242424] p-4 flex justify-center items-center'>
        {children}
    </div>
    
    </>
  )
}

export default Container