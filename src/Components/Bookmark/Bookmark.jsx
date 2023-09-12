import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
     const {title}= bookmark;
     return (
          <div className="bg-white mx-5 my-2 rounded-lg py-2">
           <h3 className="text-2xl">{title}</h3>    
          </div>
     );
};
Bookmark.propTypes = {
     bookmark: PropTypes.object

}
export default Bookmark;