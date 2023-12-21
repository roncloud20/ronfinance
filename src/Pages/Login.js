import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Login = () => {
    return (
        <>
            <Header/>
            <main>
                <h3>Login to your account</h3>
                <p>You can sign in to your axxount using email or username</p>
                <form>
                    <input type="text" placeholder="Username | E-Mail Address | Phone Number"/>
                    <input type="password" placeholder="Password"/>
                    <div>
                        <input type="checkbox"/> Keep me logged in
                        <span>Forget Password?</span>
                    </div>
                    <input type="submit" value="Login"/>

                    <p>Don't have any account? <Link to='/register'>Create Account</Link> </p>
                </form>
            </main>
        </>
    );
};

export default Login;