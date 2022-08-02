import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img className={styles.headerLogo} src={logo} alt="logo" />
        <div className={styles.headerSociais}>
          <a href="https://www.instagram.com/3lucasrs">
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.headerSociaisLogo}
            />
          </a>
          <a href="https://github.com/3lucasrs">
            <FontAwesomeIcon
              icon={faGithub}
              className={styles.headerSociaisLogo}
            />
          </a>
          <a href="https://www.linkedin.com/in/3lucasrs">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.headerSociaisLogo}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
