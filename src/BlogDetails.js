import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
 const { id } = useParams()
 const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
 const history = useHistory()
 const handleDelete = () => {
  fetch(`http://localhost:8000/blogs/${blog.id}`, {
   method: 'Delete'
  }).then(() => {
   history.push('/')
  })
 }
 return (
  <div className='blog-detail'>
   <h2>Blog details - {id}</h2>
   {error && <div>Error</div>}
   {isLoading && <div>Loading</div>}
   <div className="blog-preview">
    <h1>{blog.title}</h1>
    <p>{blog.body}</p>
    <h2>{blog.author}</h2>
    <button onClick={handleDelete}>Delete</button>
   </div>
  </div>
 )
}

export default BlogDetails
