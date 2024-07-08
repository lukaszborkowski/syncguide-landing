import React from 'react'

export const SecondaryButton = (props) => {
    return (
        <button className="btn bg-slate-50 btn-md border-2 py-2 text-gray-900 font-bold border-gray-900" {...props}>
        {props.children}
    </button>

    )
}
