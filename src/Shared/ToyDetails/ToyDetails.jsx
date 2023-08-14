import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy = useLoaderData()
    const { photoURL,
        toyName, sellerName, email, subCategory, price, rating, quantity, details } = toy;
    return (
        <div className="card md:w-1/2 bg-base-100 shadow-xl mx-auto my-12">
            <figure><img className="w-3/4" src={photoURL} /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{toyName}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <tbody>
                            <tr>
                                <td><span className="font-bold">Seller:</span> {sellerName}</td>
                                <td><span className="font-bold">Email:</span> {email}</td>
                            </tr>
                            <tr>
                                <td><span className="font-bold">SubCategory:</span> {subCategory}</td>
                                <td><span className="font-bold">Price:</span> ${price}</td>
                            </tr>
                            <tr>
                                <td><span className="font-bold">Rating:</span> {rating}</td>
                                <td><span className="font-bold">Available Quantity:</span> {quantity}</td>
                            </tr>
                            <tr>
                                <td colSpan="2"><span className="font-bold">Details:</span> <br /> {details}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;