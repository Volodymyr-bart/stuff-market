import { NavLink } from "react-router-dom";
import styles from "./../../styles/Sidebar.module.css";
const Sidebar = () => {
  const id = 1;
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories/${id}`}></NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="#" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="#"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}>
          Terms &Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
