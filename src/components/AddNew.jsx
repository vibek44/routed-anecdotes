//import { useState } from 'react'
import { useField } from '../hooks/index'

const AddNew = ({createNew}) => {
  const content=useField('text')
  const author=useField('text')
  const url=useField('text')
  const reset=useField('reset')

  const handleSubmit = (e) => {
    e.preventDefault()
    createNew({
      content:content.value,
      author:author.value,
      info:url.value,
      votes: 0
    })
    
  }

  const handleReset=()=>{
    content.reset()
    author.reset()
    url.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input                //<input {...content}/>
            type={content.type} 
            value={content.value}
            onChange={content.onChange}  />
        </div>
        <div>
          author
          <input  
          type={author.type }
          value={author.value}
          onChange={author.onChange} />
        </div>
        <div>
          url for more info
          <input  
          type={url.type}
          value={url.value}
          onChange={url.onChange} />
        </div>
        <button >create</button>
        <button type={reset.type} onClick={handleReset}>reset</button>
        
      </form>
      
    </div>
  )

}

export default AddNew