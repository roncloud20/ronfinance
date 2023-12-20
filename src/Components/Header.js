import { Link } from "react-router-dom";
import CryptoPriceList from './CryptoPriceList';
const Header = () => {
    return (
        <>
            <CryptoPriceList />
            <header>
                <h1>Ron Finance</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>About Us</li>
                        <li>Investment Plans</li>
                        <li>Affiliates</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li id="login"><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;