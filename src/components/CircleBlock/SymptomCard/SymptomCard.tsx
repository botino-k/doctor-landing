import stl from "./SymptomCard.module.css";
import { useState } from "react";
import plus from "../../../img/Circle/iconPlus.svg";

interface SymptomCardType {
  data: {
    id?: number;
    img: string;
    description: string;
  };
  styles: StyleType[];
};

interface StyleType {
  transform?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const SymptomCard = ({ data, styles }: SymptomCardType) => {
  const [circStyle, rotate, descriptionStyle] = styles;
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsActive(true);
  };

  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div style={circStyle} className={stl.symptomBlock}>
      <div style={rotate} className={stl.symptom}>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={stl.icon}
        >
          <div className={stl.plusIcon}>
            <img src={plus} alt="img" />
          </div>
          <img src={data.img} alt="img" />
        </div>
        {isActive && (
          <div style={descriptionStyle} className={stl.description}>
            {data.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomCard;

