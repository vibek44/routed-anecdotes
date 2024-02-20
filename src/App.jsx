import { useState } from 'react'
import { 
  Routes, Route, useMatch,
  useNavigate
} from 'react-router-dom'
import Notification from './components/Notification'

import MenuLink from './components/MenuLink'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import AddNew from './components/AddNew'
import Anecdote from './components/Anecdote'



function App() {
  const navigate=useNavigate()
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const [notification,setNotification]=useState('')
  

  const match=useMatch('anecdote/:id')  //useMatch reads id from URL and put in object params
  const anecdote=match
    ? anecdotes.find(el=>el.id===Number(match.params.id))
    : null

  const createNew=(anecdoteNew)=>{
    anecdoteNew.id=Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdoteNew))
    setNotification(`new anecdote '${anecdoteNew.content}' is created`)
    setTimeout(()=>{
      setNotification('')
    },3000)
    navigate('/')
    

  }

  return (
       <div>
        <h1>Software anecdotes</h1>
        <MenuLink/>
        <Notification notification={notification}/>
        <Routes>
          <Route path='/create' element={<AddNew createNew={createNew}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/anecdote/:id' element={<Anecdote anecdote={anecdote}/>}/>
          <Route path='/anecdotes' element={ <AnecdoteList anecdotes={anecdotes}/>}/>
          <Route path='/' element={<AnecdoteList anecdotes={anecdotes}/>} />
        </Routes>
        <Footer/> 
      </div>
   
  )
}

export default App
