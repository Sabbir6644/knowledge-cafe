import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookMarks, handleMarkAsRead}) => {
     const [data, setData]=useState([])
     useEffect(()=>{
          fetch('blogs.json')
          .then(res => res.json())
          .then(data=> setData(data))
     },[])
     return (
          <div>
               {
                    data.map(blog => <Blog key={blog.id} blog={blog} handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blog>)
              
               }
          </div>
     );
};
Blogs.propTypes = {
     handleBookMarks: PropTypes.func,
     handleMarkAsRead: PropTypes.func,
}
export default Blogs;