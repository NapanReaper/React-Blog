import { useEffect, useState } from "react"
import BlogList from './BlogList'
import useFetch from "./useFetch"
const Home = () => {

 const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')


 // const handleDelete = (id) => {
 //  const newBlog = blogs.filter(blog => blog.id !== id)
 //  setBlogs(newBlog)
 // }
 return (
  <div className='home'>
   <h2>Homepage</h2>
   {isLoading && <div>Loading</div>}
   {error && <div>Error: {error}</div>}
   {blogs && <BlogList blogs={blogs} title='All Blog' />}
   {/* handleDelete={handleDelete} />} */}
  </div>
 )
}

export default Home
