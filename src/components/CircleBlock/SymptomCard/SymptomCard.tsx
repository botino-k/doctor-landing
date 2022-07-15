import stl from "./SymptomCard.module.css";
import { useState } from "react";

const SymptomCard = ({data, styles}: any) => {
  const[circStyle, rotate, descrStyle]=styles
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsActive(true);
  }

  const onMouseLeave = () => {
    setIsActive(false);
  }

  return (
    <div style={circStyle} className={stl.symptomBlock}>
      <div style={rotate} className={stl.symptom}>
        <div 
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} 
          className={stl.icon}>
          <img src={data.img} alt="img" />
        </div>
        {isActive&& (<div 
          style={descrStyle} className={stl.description}>
          {data.description}
        </div>)}
      </div>
    </div>
  );
  
}

export default SymptomCard;

