import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({blog,handleBookMark,handlemarkAssRead}) => {
    // console.log(handleBookMark)
    // const {blog} = props;
    // console.log(blog)
    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className='w-16' src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}><IoBookmarkSharp size={25} /></button>
          </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
       
   <div className='flex'>
      {
        blog.hashtags.map((has) => <p>{has}</p>)
       }
   </div>

    <div className="card-actions justify-end">
      <button onClick={() => handlemarkAssRead(blog.reading_time,blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;