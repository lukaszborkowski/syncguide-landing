import React from 'react'

export const SecondaryButton = (props) => {
    return (
        <button className="btn shadow-lg text-sm bg-[rgba(255,255,255,0.9)] btn-sm sm:btn-md border-1 py-0 text-gray-900 font-bold border-gray-900" {...props}>
        {props.children}
    </button>

    )
}
