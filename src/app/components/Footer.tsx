import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { MdEmail } from "react-icons/md"; // Use MdEmail instead of just Email
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import { FaInstagram } from 'react-icons/fa'; 
export default function Footer() {
    return (
        <div className="footer w-full h-24 shadow-xl bg-black flex justify-center items-center">
            <ul className="flex space-x-4">
            <li>
                    <Link 
                        href="https://www.instagram.com/sadiakhan9433/"target="_blank"rel="noopener noreferrer" className="text-white text-center icons">
                        <FaInstagram size="2x" /> Instagram
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/sadiarajpoot" target="_blank" rel="noopener noreferrer" className="text-white text-center icons">
                        <FontAwesomeIcon icon={faGithub} size="2x" />GitHub</Link>
                </li>
                <li>
                    <Link href="mailto:sadiakham985@gmail.com" className="text-white text-center icons">
                        <MdEmail size="2x" /> Email
                    </Link>
                </li>
                <li>
                    <Link href="https://wa.me/<0311-3199283>" target="_blank" rel="noopener noreferrer" className="text-white text-center icons">
                        <FaWhatsapp size="2x" /> WhatsApp
                    </Link>
        
                </li>

            </ul>
        </div>
    );

}