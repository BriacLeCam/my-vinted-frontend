import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <section className="homepage-pic"></section>
      <section className="card-wrap">
        {data.offers.map((offer) => {
          return (
            <Link
              key={offer._id}
              to={`/offers/${offer._id}`}
              className="card-container"
            >
              <div className="card-avatar-username">
                {offer.owner.account.avatar && (
                  <img
                    src={offer.owner.account.avatar?.secure_url}
                    alt={offer.owner.account.username}
                  />
                )}
                <span>{offer.owner.account.username}</span>
              </div>
              <img
                className="card-img"
                src={offer.product_image.secure_url}
                alt={offer.product_name}
              />
              <div className="card-price-size-brand">
                <p>{offer.product_price} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
