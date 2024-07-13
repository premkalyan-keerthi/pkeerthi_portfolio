import mail from "../assets/img/email.svg";
import location from '../assets/img/location.svg';
import contact from '../assets/img/contact-phone.svg';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor: "white"}}>
      <img src={location} alt="" /><p>location: Beaumont - Texas</p>
      <img src={mail} alt="" /><p>mail:premkalyan52@gmail.com</p>
      <img src={contact} alt="" /><p>contact: 4096001193</p>
    </footer>
  )
}

export default Footer;