import logo from "../assets/images/vinted-logo.svg";
import { Link } from "react-router-dom";

// Je récupère en props le state token et la fonction handleToken
const Header = ({ token, search, handleToken, setSearch }) => {
  // const token = Cookies.get("vinted-token");
  // console.log(token);

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="vinted logo" />
      </div>
      <input
        placeholder="Recherche des articles"
        type="text"
        name="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          console.log(event.target.value);
        }}
      />
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
        <Link to={token ? "/publish" : "/login"}>
          <button className="boutontype2">vends tes article</button>
        </Link>
      </section>
    </header>
  );
};

export default Header;
