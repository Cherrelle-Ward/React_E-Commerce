import React from "react";

const CatTile = ({ catData, addBasket }) => {
  // const counter = 0;

  // addCounter = () => {
  //   counter +1
  // }

  return (
    <div>
      <div className="tiles">
        {catData.map((item, index) => (
          <div className="catTile" key={index}>
            <img className="catImage" src={item.url} alt="cats" />
            <p className="catName"> {item.name}</p>
            <p className="catBreed">{item.cat}</p>
            <p className="catCountry">{item.country}</p>
            <p className="catPrice">£{item.price}</p>
            <button
              className="button-13"
              onClick={() => {
                addBasket(item);
              }}
            >
              {" "}
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatTile;
