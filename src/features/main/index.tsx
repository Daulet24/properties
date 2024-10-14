import React from "react";
import styles from "./styles.module.scss";
import Button from "../../shared/button";
import arrowIcon from "../../assets/arrow.png";
import mainPhoto from "../../assets/main_photo.png";

const Main: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_text}>
        <h1>
          <span className={styles.prime}>Prime </span>
          <span className={styles.properties}>Properties</span> - Ваш надежный
          <br /> партнер по недвижимости
          <div className={styles.main_text}></div>
        </h1>
        <p>
          Ваш дом — это не просто строение, это место, где вы создаете семью,
          воспитываете детей, проводите время с друзьями и близкими. В Prime
          Properties мы понимаем, как важно найти идеальный дом для вашей жизни.
          <br />
          Мы предлагаем широкий выбор недвижимости высокого качества по всей
          стране и помогаем нашим клиентам найти и приобрести их идеальный дом.
        </p>
        <div className={styles.btn_container}>
          <Button className={styles.text_btn} text="Недвижемость" />
          <Button className={styles.img_btn} imageSrc={arrowIcon} />
        </div>
        <div className={styles.main_card}>
          <div className={styles.card_item}>
            <text>520+</text>
            <p>Счастливых клиентов</p>
          </div>
          <div className={styles.card_item}>
            <text>89+</text>
            <p>Доступных домов</p>
          </div>
          <div className={styles.card_item}>
            <text>231+</text>
            <p>Выигранная награда</p>
          </div>
        </div>
      </div>
      <img src={mainPhoto} alt="Main" />
    </div>
  );
};

export default Main;
