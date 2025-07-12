import Image from "next/image";

export default function Footer() {
    return (
        <>
            <section className="footer_area bg-[#00205B] py-8 mt-10 text-white font-[300] text-[15px]">
                <div className="container grid md:grid-cols-4 grid-cols-2 gap-10">
                    <div className="footer_menu">
                        <a href="#">
                            <Image src="/assets/images/footer_logo.png" width={183} height={62} className="mb-4" />
                        </a>
                        <p>Apt. 651 1353 Volkman Inlet, Port Solomon, HI 42896-6320</p>
                        <p><a href="mailto:info@vehicletransactions.com">info@vehicletransactions.com</a></p>
                        <p className="flex gap-2">Tel:<a href="tel:2149065500"> (214) 906-5500</a></p>

                    </div>

                    <div className="footer_menu">
                        <h3>Quick Links</h3>
                        <ul>

                            <a href="#">About Us</a>
                            <a href="#">How it work</a>
                            <a href="#">Pricing</a>
                            <a href="#">Contact  Us</a>

                        </ul>
                    </div>

                    <div className="footer_menu">
                        <h3>Solutions</h3>
                        <ul>

                            <a href="#">Invoices</a>
                            <a href="#">Mechanic Liens</a>
                            <a href="#">Bonded Titles</a>
                            <a href="#">Title Transfers</a>

                        </ul>
                    </div>

                    <div className="footer_menu ">
                        <h3>Create Your First Invoice Now</h3>
                        <a className="get_started_btn" href="#">Get Started Now</a>
                        <ul className="mt-4">
                            <p>SHARE</p>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="copyrights border-t border-[#f7faff42] pt-6 mt-10">
                        <p className="text-center">© 2024 Vehicle Transactions Inc. All rights reserved</p>
                    </div>
                </div>
            </section>

        </>
    );
}
