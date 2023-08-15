import { data } from "autoprefixer";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyToysRow = ({ mytoy, setMyToys, myToys }) => {

    const { photoURL, price, quantity, sellerName, subCategory, toyName, _id } = mytoy;


    const handleUpdate = id => {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: "patch",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    // Delete Method
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            // Chaging the UI on time
                            const remainingToys = myToys.filter(toy => toy._id !== id)
                            setMyToys(remainingToys)
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                footer: '<a href="">Why do I have this issue?</a>'
                            })
                        }
                    })

            }
        })

    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="toy image" />

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{subCategory}</span>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/mytoys/${_id}`}><button className="btn btn-ghost">Edit <FaPen /></button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error">
                    Delete <FaTrash></FaTrash>
                </button>
            </th>
        </tr>
    );
};

export default MyToysRow;