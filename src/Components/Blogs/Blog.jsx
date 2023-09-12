import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookMarks, handleMarkAsRead}) => {
     const {id, cover, title, author_img, author, reading_time, posted_date, hashtags}= blog;
     
     return (
          <div>
              <img className="w-full mb-5" src={cover} alt="" />
              <div className="flex justify-between items-center">
<div className="flex gap-5">
     <div><img className="w-16" src={author_img} alt="" /></div>
     <div>
          <h3 className="text-xl font-bold text-left">{author}</h3>
          <span className="text-left">{posted_date}</span>
          
     </div>
</div>
<div className='pr-3 items-center'>
<span>{reading_time} min read</span>
<button onClick={()=>handleBookMarks({blog})}><FaBookmark></FaBookmark></button>
</div>

              </div>
               <h2 className="text-4xl text-left font-bold max-w-xl">{title}</h2>
          <div className="text-left">
          {
               hashtags.map((has, index)=><a key={index} className="ml-2" href="">#{has}</a>)
          }
          <div className='my-2'>
               <button onClick={()=> handleMarkAsRead(reading_time, id)} className='underline text-[#6047EC] text-lg font-semibold'>Mark as read</button>
          </div>
          </div>
          </div>
     );
};

Blog.propTypes = {
     blog: PropTypes.object.isRequired,
     handleBookMarks: PropTypes.func,
     handleMarkAsRead: PropTypes.func
}
export default Blog;