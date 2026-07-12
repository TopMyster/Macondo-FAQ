import { useState } from 'react'
import Question from './Question.tsx'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSearch, setCurrentSearch] = useState("")
  const FAQ = [
    {
      question: "hi",
      answer: "hola"
    },
    {
      question: "man",
      answer: "boy"
    }
  ]

  const filteredFAQ = FAQ.filter(faq =>
    faq.question.toLowerCase().includes(currentSearch)
  )

  return (
    <>
     <div className="content">
      <div className='header'>
        <a href="https://hackclub.com/" target='_blank'><img src="https://assets.hackclub.com/flag-standalone.svg" className='hackclub'/></a>
        <a href='https://macondo.hackclub.com/' target='_blank'><h1>Macondo</h1></a>
        <h2>FAQ</h2>
      </div>
      <div className="search">
        <input value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} placeholder="Search your issue..."/>
        <button onClick={() => setCurrentSearch(searchQuery)}>Search</button>
      </div>
      <hr className="line"/>
      <div className="faq">
        {filteredFAQ.map(faq => 
          <Question question={faq.question} answer={faq.answer}/>
        )}
      </div>
      <footer>
        <i>This website is not affiliated with Hack Club</i>
      </footer>
     </div>
    </>
  )
}


