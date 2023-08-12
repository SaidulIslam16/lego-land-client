import notfound from '../../assets/404/404.png'

const NotFound = () => {
    return (
        <div className='h-full '>
            <img className='h-screen mx-auto' src={notfound} alt="" />
            <p>Please go back to Home</p>
        </div>
    );
};

export default NotFound;