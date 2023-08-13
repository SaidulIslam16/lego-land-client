import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { logIn, GoogleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))

    }

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login!</h1>
                            <form onSubmit={handleFormSubmit}>
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
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white" value="Login" />
                                </div>
                            </form>
                            <div className="my-3 text-center">
                                <p>Don't Have account? <span className="font-bold text-blue-600"><Link to='/signup'>Signup</Link></span></p>
                                <p className="my-3">-or-</p>
                                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"> <FaGoogle /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;