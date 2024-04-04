import React, { useEffect } from 'react'
import Card from './Card'

const CardsWrapper = ({cards}) => {

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-[95%] mx-auto'>
        {cards.map((card)=>{
            return <Card card={card} key={card.id} className="card"/>
        })}
    </div>
  )
}

export default CardsWrapper