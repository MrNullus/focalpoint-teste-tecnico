import styles from "./style.module.scss";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="/images/logo.svg" alt="FocalPoint"/>
      </div>
      <div className={ "message-welcome" }>
        <h1>
          Bem-vindo de volta, Marcus
        </h1>
      </div>
      <div className={ "message-date" }>
        <h2>
          Segunda, 01 de dezembro de 2025
        </h2>
      </div>
    </header>
  );
}

export default Header;
