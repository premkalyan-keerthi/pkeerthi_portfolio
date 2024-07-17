import mail from "../assets/img/email.svg";
import location from "../assets/img/location.svg";
import contact from "../assets/img/contact-phone.svg";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "white" }}>
      <img
        className="icons-style"
        src={location}
        alt=""
        onClick={() => {
          window.open(
            "https://www.google.com/maps/place/Beaumont,+TX,+USA/@30.0810377,-94.2927186,11z"
          );
        }}
      />
      <p>Beaumont - Texas</p>
      <img
        className="icons-style"
        src={mail}
        alt=""
        onClick={() => {
          window.open("mailTo:premkalyan52@gmail.com");
        }}
      />
      <p>premkalyan52@gmail.com</p>
      <img
        className="icons-style"
        src={contact}
        alt=""
        onClick={() => {
          window.open("tel:+1 (409) 600-1193");
        }}
      />
      <p>+1 (409) 600-1193</p>
    </footer>
  );
};

export default Footer;