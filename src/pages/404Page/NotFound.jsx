import notfound from '../../assets/404/404.png'

const NotFound = () => {
    return (
        <div className='h-full '>
            <img className='h-screen mx-auto' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;