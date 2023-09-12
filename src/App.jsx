import './App.css'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmark/Bookmarks';
import Blogs from './Components/Blogs/Blogs';
import { useState } from 'react';

function App() {
const [bookmarks, setBookmarks]=useState([]);
const handleBookMarks=({blog})=>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}
const [readingTime, setReadingTime]= useState(0);
const handleMarkAsRead = (time, id) =>{
  setReadingTime(readingTime + time);
  const remaign = bookmarks.filter(bookmark => bookmark.id != id);
  setBookmarks(remaign);
}

  return (
    <>
    <header>
    <Header></Header>
    </header>
    <main>
      <div className='md:flex my-5'>
        <div className="md:w-2/3">
          <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          </div>
        
        <div className="md:w-1/3">
          <Bookmarks bookmarks={bookmarks} readingTime= {readingTime}></Bookmarks>
          </div>
      </div>
    </main>
    </>
  )
}

export default App
