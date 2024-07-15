import React from "react";
import { Carousel } from "antd";
// const contentStyle = {
  
//   height: "560px",
//   color: "#ffff",
//   lineHeight: "560px",
//   textAlign: "center",
//   background: "#364d79",
// };
const App = () => (
  <Carousel autoplay>
    <div>
      <img
      
        src="https://stormfiber.com/wp-content/uploads/2024/02/newSlider.jpg"
        alt=""
        // Combined approach for best fit
      />
    </div>
    <div>
      <img
        src="https://stormfiber.com/wp-content/uploads/2022/02/storm-into-the-future-desktop-2-1568x725.jpg"
        alt=""
       
      />
    </div>
    <div>
      <img
     
        src="https://stormfiber.com/wp-content/uploads/2022/02/past.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        src="https://stormfiber.com/wp-content/uploads/2022/02/past.jpg"
        alt=""
     
      />
    </div>
  </Carousel>
);
export default App;
