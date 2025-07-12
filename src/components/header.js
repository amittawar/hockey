import Image from "next/image";

export default function Header() {
    return (
        <>
       
            <div className="top_header bg-[#F2F2F2] py-2">
                <div className="container">
                    <p className="italic flex items-center gap-2 text-[15px]"><Image src="/assets/images/fav_icon.png" width={22} height={20} /> A Taxes Government Agency Website </p>
                </div>
            </div>
            <div className="header_area py-4 border-b">
                <div className="container">

                    <div className="header_menu">
                        <nav className="nav">
                            <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
                            <label for="nav__checkbox" className="nav__toggle">
                                <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" className="hamburger" />
                                <img src="https://img.icons8.com/plumpy/30/000000/x.png" className="close" />
                            </label>

                            <ul className="nav__menu">
                                <li>
                                    <div className="header_logo">
                                        <a href="#"> <Image src="/assets/images/logo.png" width={184} height={62} /></a>
                                    </div>
                                </li>
                                
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Solution</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Get Started</a></li>
                                
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}
