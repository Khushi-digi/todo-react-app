import React from 'react'

const Background = () => {
    return (
        <>
         <div className=' w-full h-screen fixed z-[2]'>
                <div className=' w-full py-10 absolute top-[5%] flex justify-center text-xl font-semibold text-zinc-600'> Documents.</div>
                <h1 className=' text-[13vw] leading-none text-zinc-900 tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs. </h1>
         </div>
        </>
    )
}

export default Background