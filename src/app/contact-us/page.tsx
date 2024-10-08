import Link from "next/link";

export default function Contact() {
    return (
            <div className="max-w-2xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

                <form className="space-y-4 mt-24 ">
                    <div>
                        <label className="block text-sm font-medium">Name :</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email :</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Message :</label>
                        <textarea
                            placeholder="Your Message"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            required
                        ></textarea>
                    </div>

                    <Link href="https://wa.me/<0311-3199283>"><button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded mt-5 hover:bg-blue-700 hover:text-black "
                    >
                        Send Message
                    </button></Link>
                </form>
            </div>
     
    );
}
