import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  return (
    <>
      <div>Je suis formulaire d'annonce</div>
      {token ? (
        <form>
          <input>
            type= "text" name="username" id= "username" value=""
            placeholder="bibi"
          </input>
          <input>
            type="email" name="email" id="email" value=""
            placeholder="bibi@mail.com"
          </input>
        </form>
      ) : (
        <div>je ne suis pas connecté</div>
      )}
    </>
  );
};

export default Publish;
