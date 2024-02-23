const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            <img src="../../assets/logo.png" alt="triathlon-center" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <button className="menu__button">О нас</button>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Абонементы
                </a>
              </li>
              <li className="menu__item">
                <button className="menu__button">Услуги</button>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Тренеры
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Расписание
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="personal-area">
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
