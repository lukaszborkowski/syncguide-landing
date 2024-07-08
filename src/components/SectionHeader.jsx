import React from 'react'

const SectionHeader = (props) => {
    return (
        <div className="p-4 mx-auto my-6 space-y-1 text-center lg:mb-24">
            <h2 className="text-4xl font-[800] tracki uppercase bg-gradient-to-r from-blue-500 to-[#03b2e2] text-transparent bg-clip-text">{props.title || 'Features'}  </h2>
            <h4 className="mb-12 text-xs font-extralight tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Features designed to help you to run and
                grow your job board.</h4>
        </div>
    )
}

export default SectionHeader