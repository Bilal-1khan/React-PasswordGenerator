import React from 'react'

const Button = ({onHandleClick}) => {
  return (
    <>
        <button onClick={onHandleClick} className="btn">
            copy
          </button>
    </>
  )
}

export default Button