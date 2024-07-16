import React from "react";
// import Header from "./Header";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  width: "100%",
  height: "640px",
  color: "#ffff",
  lineHeight: "560px",
  textAlign: "center",
  background: "#364d79",
};

const App = () => (
  <Carousel>
    <div>
      <img
        style={contentStyle}
        src="https://stormfiber.com/wp-content/uploads/2022/02/storm-into-the-future-desktop-2-1568x725.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://stormfiber.com/wp-content/uploads/2022/02/storm-into-the-future-desktop-2-1568x725.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://stormfiber.com/wp-content/uploads/2022/02/past.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://stormfiber.com/wp-content/uploads/2022/02/past.jpg"
        alt=""
      />
    </div>
  </Carousel>
);
export default App;
