import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiPhoneCallLight } from 'react-icons/pi';

const details = {
  phone: '1800 210 2022',
  email: 'contact.ins@shareindia.co.in',
  timing: 'Mon - Fri: 09 AM - 06 PM',
};

const links = {
  fb: 'https://facebook.com',
  insta: 'https://instagram.com',
  x: 'https://x.com',
  linkedIn: 'https://linkedin.com',
};

export default function HeaderInfo() {
  return (
    <div className="bg-si-dark text-si-offwhite hidden h-[6vh] w-[100vw] flex-row items-center justify-between font-serif text-sm lg:flex">
      <div className="flex w-[50vw] flex-row justify-around">
        <p className="flex items-center gap-1">
          <PiPhoneCallLight /> {details.phone}
        </p>
        <p>{details.email}</p>
        <p>{details.timing}</p>
      </div>
      <div className="flex w-[10vw] flex-row justify-around">
        <a href={links.fb} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href={links.x} aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href={links.linkedIn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={links.insta} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
