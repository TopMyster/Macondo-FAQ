import Question from './Question.tsx'

export default function App() {
  return (
    <>
     <div className="content">
      <div className='header'>
        <img src="https://assets.hackclub.com/flag-standalone.svg" className='hackclub'/>
        <h1>Macondo</h1> 
        <h2>FAQ</h2>
      </div>
      
      <div className="search">
        <input placeholder="Search your issue..."/>
        <button>Search</button>
      </div>
      <hr className="line"/>
      <div className="faq">
        <Question 
          question="I'm a complete beginner. Can I still join?" 
          answer= "Absolutely! We have beginner-friendly guided projects and a community where you can ask for help anytime."
        />
      </div>
     </div>
    </>
  )
}


