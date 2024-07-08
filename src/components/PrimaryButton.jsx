import React from 'react'

const PrimaryButton = (props) => {
    return (
        <button className="btn btn-primary btn-md border-0 text-white font-bold bg-gradient-to-r from-blue-500 to-[#03b2e2] hover:from-blue-600 hover:to-[#03b2e2]" {...props}>{props.children}</button>
    )
}

export default PrimaryButton