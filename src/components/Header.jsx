import logo from "../assets/images/vinted-logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="vinted logo" />
      </div>
      <div className="adev">***** à développer *****</div>
      <section className="boutons">
        <div className="inscription-connexion">
          <button className="boutontype1">s'inscrire</button>
          <button className="boutontype1">se connecter</button>
        </div>
      </section>
      <section>
        <button className="boutontype2">vends tes article</button>
      </section>
    </header>
  );
};

export default Header;
