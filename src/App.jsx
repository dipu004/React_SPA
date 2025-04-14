
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
 const [bookmarked , setBookmarked] = useState([]);
 const [readingCount , setReadingCount] = useState(0);
  const handleBookMark = (blog) => {
     setBookmarked([...bookmarked,blog])
  }

const handlemarkAssRead = (time,id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime)
    handleRemoveFromBookmark(id)
}

const handleRemoveFromBookmark = (id) => {
     const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
     setBookmarked(remainingBookMark)
}

  return (
    <>
        <Navbar></Navbar>
        


        <div className="main-container flex text-center">
          <div className="left-container w-[75%]">
  
           <Blogs handleBookMark={handleBookMark} handlemarkAssRead={handlemarkAssRead}></Blogs>
          </div>
          <div className="right-container w-[30%]">
            <h1>Reading time: {readingCount}</h1>
            <h1>Bookmarked count:  {bookmarked.length}</h1>
            {
              bookmarked.map((marked) => <p key={marked.id} className='bg-red-600 p-2 shadow m-2 text-white text-2xl'>{marked.title}</p>)
            }
          </div>
        </div>
    </>
  )
}

export default App
