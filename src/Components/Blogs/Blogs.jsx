import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark,handlemarkAssRead}) => {
    const [blogs, setBlogs] = useState([])

     useEffect(() =>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
     },[])
    //  console.log(blogs);

    return (
        <div>
            <h1 className='text-3xl text-red-500'>Total: {blogs.length}</h1>
            <div className="all-blogs grid-cols-2 grid">
                {
                    blogs.map((blog) => <Blog blog={blog} handleBookMark={handleBookMark} key={blog.id} handlemarkAssRead={handlemarkAssRead}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;