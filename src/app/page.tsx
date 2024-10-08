import Image from "next/image";
import homePic from "../app/images/home.jpg"
import Abaya2 from "../app/images/abaya 2.webp"
import  hijab1 from "../app/images/girls new2e.jpg"
import home2 from  "../app/images/home 2 abaya.webp"
import home3 from  "../app/images/home abaya 3.webp"
import home4 from  "../app/images/home abaya 4.webp"
import home5 from  "../app/images/home abaya 5.webp"
import home6 from  "../app/images/home abaya 6.webp"
import home7 from "../app/images/home hijab 2.webp"
import home8 from "../app/images/home hijab 3.webp"
import home9 from "../app/images/home hijab 4.webp"
import home11 from "../app/images/home hijab 6.webp"
import home10 from "../app/images/home hibjab 5.webp"
// next //
import home12 from "../app/images/niqab 1.webp"
import home13 from "../app/images/niqab 3.webp"
import home14 from "../app/images/niqab 4.webp"
import home15 from "../app/images/niqab 7.webp"
import home16 from "../app/images/niqab.webp"
//next //
import home17 from "../app/images/home hijab 6.webp"
import home18 from "../app/images/home hijab 7.webp"
import home19 from "../app/images/home hijab 10.webp"
import home20 from "../app/images/home hijab 9.webp"
import home21 from "../app/images/home hijab 8.webp"
import home22 from "../app/images/new 1.jpg"
import home23 from "../app/images/new 2.jpg"
import home24 from "../app/images/new 3.jpg"
import home25 from "../app/images/new 4.webp"
import home26 from "../app/images/new 5.webp"
import home27 from "../app/images/new6.webp"
import home28 from "../app/images/new 7.webp"
import home29 from "../app/images/new 8.webp"
import home30 from "../app/images/new 9.webp"
import home31 from "../app/images/new 10.webp"

export default function Home() {
  return (
    <>
      <div>
      <Image src={homePic} alt="home" className="home width={300} height={200} shadow-lg shadow-black-500/90 bg-opacity-20"/>

      <div className="text-center mt-8 font-bold homehead  ">Hijabs By Sadia
      <section className="py-10 ">
                <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-4 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={Abaya2}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Soft Colors Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg ">Rs.4500.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home2}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Button Maxi Abayas</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4800.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home3}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Loop Button Blue Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4800.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home4}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Elegant Miral Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4500.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home5}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Burgundy Butterfly Gown Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4800.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                  
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home6}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Blue Embroidery with Inner Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.5000.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home7}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Gold Print Chiffon - Lilac</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                            
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                        
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home8}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7"> Gold Print Chiffon - Navy Blue</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>
                                     {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home9}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7"> InterLining Chiffon - Maroon</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home10}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">  Self Lining Chiffon - Purple </h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>


                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home12}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Georgette Hijab & Niqab Kit- Black</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.900.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                        
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home13}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Luxury Niqab & Hijab Set-Orange</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.900.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto text-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Variety of Styles Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                   
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home14}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Luxury Niqab & Hijab Set-Steel Grey</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.900.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home15}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Saudi Naqab Burgundy</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1,499.00.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home16}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Regular Niqab Maroon</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.300.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Pure White</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home17}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">6 Georgette Hijab Box - Pink Plum</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.3,599.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home18}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Luxury Turkish Viscose - Apple Green</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.599.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4  hover:border-rose-300 ">Light Colors</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home19}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Luxury Glossy Silk - Warm Taupe</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>
                        
                    </div>          
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto text-center mt-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  
              
                        {/* Variety of Styles Card */}
                        <div className="border p-4 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home20}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Premium Georgette - Eggplant</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home21}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Premium Georgette - Cedar</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.750.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                          
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home22}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Light Blue – Floral Front Open Chun</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2000.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home23}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Jet Black – Stripes Front Open Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1,890.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Light Colors</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home24}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Designer Shrug Style Pink And Brown Closed Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2,999.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                           
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home25}
                                    alt="Light color hijab"
                                    width={200}
                                    height={200}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic Flowers (Beige Abaya)</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1,890.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto text-center mt-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  
              
                        {/* Variety of Styles Card */}
                        <div className="border p-4 rounded-lg shadow-lg  hover:border-rose-300  ">
                            <h3 className="text-xl font-normal mb-4">Variety of Styles</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home26}
                                    alt="Fashion design"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic Flowers Soft Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1,890.00 PKR</h4>
                        </div>

                        {/* Comfort and Fit Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
        
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home27}
                                    alt="Comfortable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic Flowers Light-Color Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.1,890.00 PKR</h4>
                        </div>

                        {/* Affordable Prices Card */}
                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home28}
                                    alt="Affordable hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic 10 Ten (Black Abaya)</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2000.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            <h3 className="text-xl font-semibold mb-4">Pure White</h3>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home29}
                                    alt="Pure white hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic Reversible (Grey Abaya)</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2,300.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home30}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Basic Reversible (Light Brown Abaya)</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2,300.00 PKR</h4>
                        </div>

                        <div className="border p-6 rounded-lg shadow-lg  hover:border-rose-300 ">
                            
                            <div className="flex flex-col items-center">
                                <Image 
                                    src={home31}
                                    alt="Light color hijab"
                                    width={300}
                                    height={300}
                                    className="inline-block mb-4"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-7">Casual Black Abaya</h4>
                            <h4 className="text-xl font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.4000.00 PKR</h4>
                        </div>
                    </div>              
                </div>
            </section>
      </div>
    </div>
    </>
  );
}
