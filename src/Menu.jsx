import { useState } from "react";
import "./Menu.css";
import Special from "./Special";
import Lounch from "./Lounch";
import Breakfast from "./BreackFast";
import Dinner from "./Dinner";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default: first one
  const [data, setData] = useState(<Special/>);

  const items = ["Special", "Lunch", "Breakfast", "Dinner"];
  const menuData = [

      <Special/>,
      <Lounch/>,
      <Breakfast/>,
      <Dinner/>
   
    
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    setData(menuData[index]);
  };

  return (
    <div className="container-fluid" >
      <div className="row">
    <div className="text-center" >
      {/* Menu */}
      <ul
  className="d-flex justify-content-center list-unstyled flex-wrap gap-3 mt-3"
>
  {items.map((item, index) => (
    <li
      key={item}
      className={`menu-item ${activeIndex === index ? "active" : ""}`}
      onClick={() => handleClick(index)}
    >
      {item}
    </li>
  ))}
</ul>


      {/* Selected Data */}
      <div style={{ marginTop: "20px", fontSize: "1.5rem", color: "#333" }}>
        {data}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Menu;
