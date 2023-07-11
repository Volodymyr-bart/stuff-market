import styles from "./../../styles/Footer.module.css";
import LOGO from "./../../images/logo.svg";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="LOGO" />
        </Link>
      </div>
      <div className={styles.rights}>Developed by Vova</div>
      <div className={styles.socials}>
        {" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
