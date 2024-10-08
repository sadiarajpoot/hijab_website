export default function Services() {
    return (
        <div>
            <section className="py-10">
                    <h2 className="text-2xl font-bold py-20 text-center font-kaushan font-700">Hijabs Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center ">
                        <h3 className="text-xl font-semibold  hover:text-rose-300 ">Chiffon Hijabs</h3>
                        <p>Lightweight and flowy, perfect for any occasion.</p>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center ">
                        <h3 className="text-xl font-semibold  hover:text-rose-300 ">Cotton Hijabs</h3>
                        <p>Soft and breathable, ideal for everyday wear.</p>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center ">
                        <h3 className="text-xl font-semibold  hover:text-rose-300 ">Silk Hijabs</h3>
                        <p>Luxurious and elegant, perfect for special occasions.</p>
                    </div>
                </div>
            </section>
            <div className=" bg-rose-300">
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
                <p className="mb-6">
                    We strive to deliver your hijabs quickly and safely. Here are our delivery options:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-5 rounded-lg shadow-md  hover:border-rose-300">
                        <h3 className="text-xl font-semibold">Standard Shipping</h3>
                        <p>Delivery within 5-7 business days.</p>
                        <p className="font-bold">Rs.200.00 PKR</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md   hover:border-rose-300">
                        <h3 className="text-xl font-semibold">Express Shipping</h3>
                        <p>Delivery within 2-3 business days.</p>
                        <p className="font-bold">Rs.350.00 PKR</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md ">
                        <h3 className="text-xl font-semibold">Free Shipping</h3>
                        <p>On orders over 3 Order.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-lg font-semibold">International Shipping</h3>
                    <p>We also offer international shipping. Please note that delivery times may vary based on your location.</p>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold">Returns Policy</h4>
                    <p>If you're not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
                </div>
            </section>
        </div>
   
        </div>
    );
}
