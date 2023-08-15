import { Link } from "react-router-dom";


const TabProductCard = ({ toy }) => {
    const { photoURL, toyName, rating, price, _id } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-72" src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <div className="flex justify-between items-center my-5">
                    <p>Ratings: <span className="font-bold">{rating}</span></p>
                    <p className="text-2xl font-bold text-red-600">Price: {price}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/toys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TabProductCard;