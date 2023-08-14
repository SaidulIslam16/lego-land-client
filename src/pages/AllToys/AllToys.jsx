import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow/ToyRow";

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold mb-6">All Toys: {toys.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;