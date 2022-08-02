import { Level } from "../../helpers/imc";
import styles from "../GridItem/GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import { Fragment } from "react";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icon === "up" ? upImage : downImage}
          width="30"
          alt="imagem"
        /> 
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.yourImc}>Seu IMC é {item.yourImc}</div>
      )}
      <div className={styles.gridInfo}>
        <Fragment>
          IMC entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </Fragment>
      </div>
    </div>
  );
};
