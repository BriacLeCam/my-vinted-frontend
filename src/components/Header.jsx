import logo from "../assets/images/vinted-logo.svg";
import { Link } from "react-router-dom";

// Je récupère en props le state token et la fonction handleToken
const Header = ({ token, handleToken }) => {
  // const token = Cookies.get("vinted-token");
  // console.log(token);

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="vinted logo" />
      </div>
      <div className="adev">***** à développer *****</div>
      <section className="boutons">
        {/* Si token existe, c'est que je suis connecté, j'affiche le bouton déconnexion, sinon j'affiche les 2 autres boutons */}
        {token ? (
          <button
            className="boutontype3"
            onClick={() => {
              // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div className="inscription-connexion">
            <Link to="/signup">
              <button className="boutontype1">s'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="boutontype1">se connecter</button>
            </Link>
          </div>
        )}
      </section>
      <section>
        <button className="boutontype2">vends tes article</button>
      </section>
    </header>
  );
};

export default Header;
