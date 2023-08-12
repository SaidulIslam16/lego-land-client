import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const { signUp } = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl.value;
        console.log(name, email, password, photourl);
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">

                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Singup!</h1>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="enter name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input name="photourl" type="text" placeholder="photorul" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white" value="Sign Up" />
                                </div>
                            </form>
                            <div className="my-3 text-center">
                                <p>Already Have account? <span className="font-bold text-blue-600"><Link to='/login'>Login</Link></span></p>
                                <p className="my-3">-or-</p>
                                <button className="btn btn-circle btn-outline"> <FaGoogle /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;