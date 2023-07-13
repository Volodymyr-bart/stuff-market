import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./../../styles/Sidebar.module.css";
// import { BASE_URL } from "../../utils/constants";
const Sidebar = () => {
  const { list, isLoading } = useSelector(({ categories }) => categories);
  console.log(isLoading);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          {!isLoading &&
            list.slice(0, 5).map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  to={`categories/${id}`}>
                  {name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/"
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
