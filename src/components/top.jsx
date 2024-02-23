const Top = () => {
  return (
    <section className="top">
      <div className="container">
        <div className="top__inner">
          <h1 className="top__title">TRIATHLON CENTER</h1>
          <p className="top__text">
            Преодолевай границы, превосходи себя вместе с нами!
          </p>
          <button className="top__bid">Оставить заявку</button>
          <div className="top__link">
            <button>
              <img src="../../assets/whatsapp-link.png" alt="whatsapp" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
