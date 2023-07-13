import style from "./../../styles/Home.module.css";
import BG from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={StyleSheet.home}>
      <div className={style.title}>Big Sale 20%</div>
      <div className={style.product}>
        <div className={style.text}>
          <div className={style.subtitle}>the bestseller of 2022</div>
          <h1 className={style.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={style.button}>Shop now</button>
        </div>
        <div className={style.image}>
          <img src={BG} alt="Photo" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
