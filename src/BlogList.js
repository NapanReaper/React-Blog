import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
 console.log(blogs);
 return (
  <div>
   <h2>{title}</h2>
   {blogs.map(blog => (
    <div key={blog.id} className='blog-preview'>
     <Link to={`/blogs/${blog.id}`}>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <h2>Written by {blog.author}</h2>
     </Link>
    </div>
   ))}
  </div>
 )
}

export default BlogList
