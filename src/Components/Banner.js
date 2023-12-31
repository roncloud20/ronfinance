import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="sec1">
                    <div className="banner-images">
                        <img src={img2} alt="Growth" />
                        <img src={img3} alt="Bitcoin" />
                    </div>
                    <h1>
                        Maximize your <br/>
                        Investment <br/>
                        Returns
                    </h1>
                    <p>
                        Anyone can invest money to different currency to increase their <br/>
                        earnings by the help of Jbcoinfinance investment plans.
                    </p>

                    <button>Get Started</button>
                </div>
                <div className="sec2">
                    <img src={img1} alt="Cash Growth"/>
                </div>
                <div className="sec3">
                    <span>
                        <h2>10 Years</h2>
                        <p>Trading Experience</p>
                    </span>
                    <span>
                        <h2>24/7</h2>
                        <p>Online Support</p>
                    </span>
                    <span>
                        <h2>25k</h2>
                        <p>Trading Experience</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Banner;