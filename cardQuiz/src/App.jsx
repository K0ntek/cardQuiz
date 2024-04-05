import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import CardsWrapper from './components/CardsWrapper'
import axios from 'axios'

function App() {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState ([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(()=>{
    axios.get('https://opentdb.com/api_category.php')
    .then(res =>(
      setCategories(res.data.trivia_categories)
    ))
  },[])

  useEffect(()=>{
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e){
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount : amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res =>{
      setCards(res.data.results.map((questionItem, i)=>{
        const answer = decodeString(questionItem.correct_answer)
        const options = [decodeString(...questionItem.incorrect_answers), answer]
        return{
          id: `${i}`,
          question: `${i+1}. ` + decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }



  return (
    <div>
      <div className=''>
        <h1 className='text-center text-3xl tracking-[2px]'>FLASHCARD QUIZ</h1>
        <form onSubmit={handleSubmit} className='my-10 space-y-4 w-fit mx-auto'>
            <div className='flex flex-wrap space-x-4'>
            <div className=' text-xl mx-auto text-center'>
                      <label htmlFor="category">Category: </label><br />
                      <select id="category" ref={categoryEl} className=' w-[200px] text-white bg-[#090909] focus:outline-none border-[1px] border-white rounded-full p-2'>
                        {categories.map((category, i)=>{
                          return(
                            <option value={category.id} className='text-white'>{category.name}</option>
                          )
                        })}
                      </select>
                    </div>

                    <div className=' text-xl mx-auto text-center'>
                      <label htmlFor="category">Questions: </label><br />
                        <input type="number" id='amount' min={1} step={1} defaultValue={10} ref={amountEl} className=' w-[200px] text-white bg-[#090909] focus:outline-none border-[1px] border-white rounded-full p-2'/>
                    </div>
            </div>

        <div className=' mx-auto text-center'>
          <button className='bg-[#0145b3] hover:bg-[#1945b9] text-white px-3 py-2 rounded-full text-xl'>Generate</button>
        </div>
      </form>
      </div>
       <CardsWrapper cards={cards}/>

       <p className="text-white text-[10px] text-center mt-10">CARDQUIZ 2024 ©
        <a href="https://jakubkontekcv.onrender.com/" className=" text-[#f24602] font-bold"> JAKUB KONTEK</a></p>
    </div>
  )
}

export default App
