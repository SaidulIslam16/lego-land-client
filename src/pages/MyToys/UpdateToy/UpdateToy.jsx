import { useContext, } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    const { photoURL, toyName, subCategory, price, rating, quantity, details, _id } = toy;

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const photoURL = form.photoURL.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updatedtoy = {
            photoURL,
            toyName,
            sellerName,
            email,
            subCategory,
            price,
            rating,
            quantity,
            details
        }

        // console.log(updatedtoy);

        const url = `http://localhost:5000/toys/${_id}`
        console.log(url);

        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedtoy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy Info Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                }
            })
    }

    return (
        <div className="my-16">
            <div className="bg-base-200">
                <div >

                    <div className="shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Update Toy Info</h1>
                            <form onSubmit={handleFormSubmit}>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name="photoURL" defaultValue={photoURL} type="text" placeholder="Photo Url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input name="toyName" defaultValue={toyName} type="text" placeholder="Enter Toy Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input name="sellerName" type="text" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input name="email" type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <input name="subCategory" defaultValue={subCategory} type="text" placeholder="Sub Category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name="price" type="text" defaultValue={price} placeholder="$120.36" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name="rating" type="text" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input name="quantity" defaultValue={quantity} type="text" placeholder="Quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail description</span>
                                        </label>
                                        <input name="details" defaultValue={details} type="text" placeholder="Enter Details" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white" value="Update Toy Info" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;