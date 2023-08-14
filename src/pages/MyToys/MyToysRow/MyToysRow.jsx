
const MyToysRow = ({ mytoy }) => {

    const { photoURL, price, quantity, sellerName, subCategory, toyName, _id } = mytoy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <>

                                toy?.photoURL ? <img src={photoURL} alt="toy image" />

                            </>

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
                <button className="btn btn-ghost btn-xs">Edit </button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Delete </button>
            </th>
        </tr>
    );
};

export default MyToysRow;