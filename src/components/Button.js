import React from 'react'

// make a reusable button component
export const ButtonInline = ({ onClick, type='button', children }) => (
    <button 
        type={type}
        className="button-inline"
        onClick={onClick}
    >
        {children}
    </button>
)

export const Button = ({ onClick, className, type='button', children }) => (
    <button 
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}    
    </button>
)