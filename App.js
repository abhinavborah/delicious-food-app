import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/assets/delicious-logo.png";
import cartIcon from "/assets/cart-icon.png";
import resList from "./restaurant-data.js";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img className="cart-icon" src={cartIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // Destructing Arguments
  const { resData } = props;
  //   Optional Chaining
  const { name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// Top Level Component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
