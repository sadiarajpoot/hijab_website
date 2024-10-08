import Image from "next/image";
import image01 from "../images/magneticpin.webp"
import image02 from "../images/rose hijab pin.webp"
import image03 from "../images/4 caps.webp"
import image04 from "../images/cap.webp"
import image05 from "../images/caps.webp"
import image06 from "../images/hijabpin.webp"
import image07 from "../images/magnetpinround.webp"
import image08 from "../images/pin1.webp"
import image09 from "../images/pin 2.webp"
import image10 from "../images/pin3.webp"
import image11 from "../images/pin 4.webp"
import image12 from "../images/pin 5.webp"
import Navbar from "../components/Header";
import Footer from "../components/Footer";
export default function Accessories(){
    return(
        <>
        <Navbar />
         <section className="py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10 mt-20 heading-features font-kaushan font-700">Our Hijabs Accessories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image01}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Square Neutral Magnetic Pins</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.500.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">

                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image02}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Rose hijab Magnetic Pins </h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.700.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                          
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image03}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">4 in 1 Inner Cap</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.300.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image04}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Neck Cover Hijab Caps-Black</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.400.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                         
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image05}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                    
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Pack Of 10 Tie Black Hijab Caps</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1190.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image06}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">No Snag Hijab Pins</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.150.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image07}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Square Neutral Magnetic Pins</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.500.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                          
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image08}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Crystal Black pin-less Hijab Pin (Multi)</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.99.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image09}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Scrunchie - Aqua -HI</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.180.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image10}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">White Scarf pin Z-4</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.180.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                         
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image11}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Glitter Hijab Caps</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.199.00 PKR</h4>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                        
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image12}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Kids Hair Pins</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.99.00 PKR</h4>
                        </div>
        
                    </div>              
                </div>
            </section>
            <Footer />
           </>
    );
}