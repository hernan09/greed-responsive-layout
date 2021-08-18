import React from "react";
import LayoutPage from "../../Components/Layout.jsx";
import WeatherComponent from "../../Components/WeatherComponent/default.jsx";
import "./index.css";

const Homepage = () => {
  return (
    <div className="body_app">
      <div className="header__widget">
        <h3>WIDGETS HEADER</h3>
      </div>
      <div className="main">
        <h3>MAIN SECTION</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="aside">
        <h3>ASIDE</h3>
        <p>
          L Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="widget1">
        <h3>CONTACT HERE</h3>
        <LayoutPage />
      </div>
      <div className="widget2">
        <WeatherComponent />
      </div>
      <div className="footer__widget">
        <h3>PREEFOOTER</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis id
          odit reiciendis provident ad modi est ex accusantium! Perspiciatis,
          natus repellendus accusamus unde animi ab quam ipsa magni odit
          adipisci.
        </p>
      </div>
      <div className="footer__widget2">
        <h3>PREEFOOTER2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          porro adipisci illum quod tempore minima facilis repudiandae eaque,
          expedita aliquid totam nulla numquam accusantium sunt iusto. Fuga
          pariatur suscipit molestiae.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
