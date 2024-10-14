import React from "react";
import styles from "./styles.module.scss";
import { INavLinks } from "../../shared/navlinks";
import Logo from "../../assets/logo.png";
import Button from "../../shared/button";
import Search from "../../shared/search";
import houseIcon from "../../assets/house.png";

const handleSearch = (query: string) => {
  console.log("Ищем:", query);
};

const Header: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.nav_links}>
        <INavLinks text="О нас" />
        <INavLinks text="Недвижемость" />
        <INavLinks text="Услуги" />
        <INavLinks text="Блог" />
        <INavLinks text="Контакты" />
      </div>
      <Search
        className={styles.header_search}
        onSearch={handleSearch}
        iconClass={styles.seacrh_icon}
      />
      <div className={styles.buttons}>
        <Button imageSrc={houseIcon} altText="Кнопка 1" />
        <Button imageSrc={houseIcon} altText="Кнопка 2" />
      </div>
    </header>
  );
};

export default Header;
