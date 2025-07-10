import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { PiPhoneCallLight } from "react-icons/pi"


const details = {
    phone: "1800 210 2022",
    email: "contact.ins@shareindia.co.in",
    timing: "Mon - Fri: 09 AM - 06 PM",
}

const links = {
    fb: "https://facebook.com",
    insta: "https://instagram.com",
    x: "https://x.com",
    linkedIn: "https://linkedin.com"


}

export default function HeaderInfo(){
    return (
        <div className="w-[100vw] h-[6vh] items-center flex flex-row justify-between bg-slate-900 text-white font-serif text-sm">
            <div className="flex flex-row w-[50vw] justify-around">
                <p className="flex"><PiPhoneCallLight /> {details.phone}</p>
                <p>{details.email}</p>
                <p>{details.timing}</p>
            </div>
            <div className="flex flex-row w-[10vw] justify-around">
                <a href={links.fb}>
                    <FaFacebook />
                </a>
                <a href={links.x}>
                    <FaXTwitter />
                </a>
                <a href={links.linkedIn}>
                    <FaLinkedin />
                </a>
                <a href={links.insta}>
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}