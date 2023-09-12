import PropTypes from 'prop-types';
import Bookmark from "./Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
     return (
          
          <div className="ml-4">
               <h2 className="text-3xl font-bold mb-3 p-4 rounded-lg text-[#6047EC] bg-gray-300">Spent time on read : {readingTime}</h2>
               
               <div className="bg-slate-300 py-4 rounded-md">
               <h1 className="text-2xl font-bold">Bookmark Blogs: {bookmarks.length}</h1>
                    {
                         bookmarks.map((bookmark,indx)=><Bookmark key={indx} bookmark={bookmark}></Bookmark>)
                    }
               </div>
          </div>
     );
};
Bookmarks.propTypes = {
     bookmarks: PropTypes.array,
     readingTime: PropTypes.number
}
export default Bookmarks;