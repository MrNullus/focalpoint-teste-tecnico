import stylesGlobals from "../../app/resources/styles/globals.module.scss";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo-container">
        <img className="logo" src="/images/logo.svg" alt="FocalPoint"/>
      </div>
      <div className={ "message-welcome" }>
        <h1 className={stylesGlobals.title}>
          Bem-vindo de volta, Marcus
        </h1>
      </div>
      <div className={ "message-date" }>
        <h2 className={stylesGlobals.subtitle}>
          Segunda, 01 de dezembro de 2025
        </h2>
      </div>
    </header>
  );
}

export default Header;
