import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {
 const [title, setTitle] = useState('')
 const [body, setBody] = useState('')
 const [author, setAuthor] = useState('mario')
 const [isLoading, setIsLoading] = useState(false)
 const history = useHistory()

 const handleSubmit = (e) => {
  e.preventDefault();

  const blog = { title, body, author }

  setIsLoading(true)

  fetch('http://localhost:8000/blogs', {
   method: 'Post',
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(blog)
  }).then(() => {
   console.log('new blog added');
   setIsLoading(false)
   // history.go(-1)
   history.push('/')
  })
 }
 return (
  <div className='create'>
   <h2>Add a new Blog</h2>
   <form onSubmit={handleSubmit}>
    <label>Blog title:</label>
    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
    <label>Blog body:</label>
    <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
    <label>Author</label>
    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
     <option value="mario">Mario</option>
     <option value="luigi">Luigi</option>
     <option value="yoshi">Yoshi</option>
    </select>
    {!isLoading && <button type='submit'>Add Blog</button>}
    {isLoading && <button type='submit' disabled>Adding blog...</button>}
   </form>
  </div>
 )
}

export default Create
