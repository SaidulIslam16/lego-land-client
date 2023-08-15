import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow/MyToysRow";

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/toys?email=${user?.email}`;

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])

    return (
        <div className="my-12">
            <div className="my-5">
                <h1 className="text-3xl font-bold">Total Toys: {myToys.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(mytoy => <MyToysRow key={mytoy._id}
                                mytoy={mytoy}
                                setMyToys={setMyToys}
                                myToys={myToys}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;