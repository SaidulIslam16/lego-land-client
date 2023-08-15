import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow/ToyRow";
import { useState } from "react";

const AllToys = () => {
    const alltoys = useLoaderData();
    const [toys, setToys] = useState(alltoys)

    const handleSearch = event => {
        event.preventDefault();
        const searchText = event.target.search.value;
        console.log(searchText);

        const filteredToys = toys.filter(toy => toy.toyName === searchText);
        console.log(filteredToys);
        setToys(filteredToys)

    }
    return (
        <div className="my-16">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">All Toys: {toys.length}</h1>
                <form onSubmit={handleSearch}>
                    <input name="search" className="border-2 p-2" placeholder="Enter Search Text" type="text" />
                    <input className="bg-red-600 border-2 border-red-600 text-white py-2 px-4 cursor-pointer" type="submit" value="Search" />
                </form>
            </div>
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