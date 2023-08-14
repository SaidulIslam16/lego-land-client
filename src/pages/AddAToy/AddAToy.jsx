import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const AddAToy = () => {

    const { user } = useContext(AuthContext);

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

        const toy = {
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

        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
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
                            <h1 className="text-3xl font-bold text-center">Add A Toy</h1>
                            <form onSubmit={handleFormSubmit}>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name="photoURL" type="text" placeholder="Photo Url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input name="toyName" type="text" placeholder="Enter Toy Name" className="input input-bordered" />
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
                                        <input name="subCategory" type="text" placeholder="Sub Category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name="price" type="text" placeholder="$120.36" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name="rating" type="text" placeholder="Rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail description</span>
                                        </label>
                                        <input name="details" type="text" placeholder="Enter Details" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white" value="Add Product" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;