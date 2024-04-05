import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({card}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div 
    onClick={()=> setToggle(!toggle)}
    className={`card overflow-x-hidden relative bg-gradient-to-r 
            ${toggle ? 'bg-black' : `  ${(card.id+ 1) %3 ==0 ?
            'from-[#ed7009] to-[#f24602]' :
            'from-[#075fed] to-[#0145b3]' }
        ${(card.id+ 2) %3 ==0 ?
            'from-[#0f0f0f] to-black' :
            'from-[#075fed] to-[#0145b3]' }`}
         rounded-2xl p-5 shadow-xl shadow-black hover:mt-[-10px] hover:mb-[10px] transition-all duration-200 cursor-pointer`}
    >
        <div className={`front p-[1rem] ${toggle ? ' opacity-0 duration-150' : ' opacity-100 duration-300'}`}>
            <h2 className=' font-[600] text-2xl'>{card.question}</h2>
           <div className=' ml-5 mt-3'>
            {card.options.map((option, i)=>{
                    return(
                        <div className=''>
                            <p key={option} className="text-[#eaeaea] font-[600]">{i+1}. {option}</p>
                        </div>
                    )
                })}
           </div>
        </div>
        {/* {toggle ? card.answer : [card.question]} */}
        <div className={` bg-gradient-to-r w-full h-full from-[#0b0b0b] to-[#1d1d1d] text-white back absolute top-[50%] translate-y-[-50%] left-[-100%] ${toggle ? 'left-[50%] translate-x-[-50%] duration-200' : 'left-[-100%] duration-200'}`}>
            <div className=' absolute top-[50%] translate-y-[-80%] flex space-x-3'>
                <div className={` bg-gradient-to-t ml-7 ${(card.id+ 1) %3 ==0 ?
                                        'from-[#ed7009] to-[#f24602]' :
                                        'from-[#075fed] to-[#0145b3]' }
                                    ${(card.id+ 2) %3 ==0 ?
                                        'from-[#282828] to-[#3e3e3e]' :
                                        'from-[#075fed] to-[#0145b3]' }
                                        w-[5px] h-[50px]`}></div>
                <p className=' text-3xl font-[600] ml-7'>{card.answer}</p>
            </div>
        </div>
    </div>
  )
}

export default Card