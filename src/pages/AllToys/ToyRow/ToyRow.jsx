import imgplaceholder from "../../../assets/profile-place-holder.jpg"

const ToyRow = ({ toy }) => {

    const { photoURL, price, quantity, sellerName, subCategory, toyName, _id } = toy;
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <>
                                {
                                    toy?.photoURL ? <img src={photoURL} alt="toy image" /> : <img src={imgplaceholder} />
                                }
                            </>

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{subCategory}</span>
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">View Details</button>
            </th>
        </tr>
    );
};

export default ToyRow;