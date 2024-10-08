import Link from "next/link";
import Image from "next/image";
import image01 from "../images/fashion.jpg";
import image02 from "../images/f2.webp";
import image03 from "../images/f3.jpg";
import image04 from "../images/f4.jpg";
import image05 from "../images/f5C.jpg";
import image06 from "../images/f6C.jpg";
import image01S from "../images/Saudi1.webp";
import image07 from "../images/saudi 2.webp";
import image08 from "../images/saudi 2.webp";
import image09 from "../images/saudi 3.webp";
import image10 from "../images/saudi 4.webp";
import image11 from "../images/saudi 4.webp";
import image12 from "../images/saudi 5.webp";
import image13 from "../images/saudi 6.webp";
import image14 from "../images/saudi 7.webp";
import image15 from "../images/abaya 1.webp";
import image16 from "../images/abaya 2.webp";
import image17 from "../images/abaya 3.webp";
import image18 from "../images/abaya 4.webp";
import image19 from "../images/abaya 5.webp";
import image20 from "../images/abaya 6.webp";


export default function Categories() {
    return (
        <>
            <section className="py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10 mt-20 heading-features font-kaushan font-700">Categories of Our Hijabs</h2>
                    <h3 className="text-3xl font-bold mb-10 mt-0 text-rose-300">Fashion Hijabs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Variety of Styles</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image01}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7"> Multi Colors Chiffon Scarves</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Comfort and Fit</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image06}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Greenish Chiffon Scarves </h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image02}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Pink Chiffon Scarves</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Pure White</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image03}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Pure White Chiffon Scarves</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4"> Chiffon Light Colors</h3>

                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image04}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                    
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Brown Chiffon Scarves</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Light Colors</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image05}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Off-White Chiffon Scarves</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>
        
                    </div>              
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-10  text-rose-300">Saudi Hijabs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image07}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Set Baby blue</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1500.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300: ">
                           
                            <div className="flex flex-col items-center image08">
                                <Image 
                                    src={image14}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Navy blue</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                         
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image09}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Multiple Colors</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image10}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Set Gold</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                       
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image13}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Set Ash Grey</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
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
                            <h4 className="text-xl font-semibold mb-7">Hijab Naqab Set Black</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-10 text-rose-300 ">Abaya</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image15}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Sea-Green Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.990.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image16}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Soft Colors Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4,350.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image17}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Classical Elasticated Sleeves Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4500.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image18}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Button Maxi Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4800.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image19}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Classical Butterfly Abaya In Warm Brown Color</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4500.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                          
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={image20}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Classical Elasticated Sleeves Abaya In Sea-Green</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4500.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>
        </>
    );
}


