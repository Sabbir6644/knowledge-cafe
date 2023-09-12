import profile from '../../../public/Images/profile.png'
const Header = () => {
     return (
          <div className='flex justify-between items-center border-b-2 pb-2'>
               <h2 className='text text-4xl font-bold'>Knowledge Cafe</h2>
              <img src={profile} alt="" />
          </div>
     );
};

export default Header;