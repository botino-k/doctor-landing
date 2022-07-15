import stl from "./Symptom.module.css";
import SymptomCard from '../SymptomCard/SymptomCard';

//import { useState } from "react";

//interface Props {
//  props: string
//}

const Symptom = ({ props }: any) => {


  const symptomBlock = props[0].symptoms.map((item: any, index: number) => {
  
    const circStyle = {
      transform: `rotate(calc(360deg/${props[0].symptoms.length}*${index}))`};
    const rotate = {
      transform: `rotate(calc(360deg/-${props[0].symptoms.length}*${index}))`};

    let descrStyle = {
      top: ``,
      left: ``,
      right: ``,
      bottom: ``,
    };

    let deg: number = (360 / props[0].symptoms.length) * index;

    if (deg < 90 || deg > 270) {
      descrStyle.right = `calc(100% + 30px)`;
    } else if (deg === 90) {
      descrStyle.top = `calc(0% - 30px)`;
    } else if (deg > 90 && deg < 270) {
      descrStyle.left = `calc(100% + 30px)`;
    } else if (deg === 270) {
      descrStyle.top = `calc(150% )`;
    }

    return (
      <SymptomCard data={item} styles={[circStyle, rotate, descrStyle]} />
         );
  });

  return (
    <div className={stl.mainBlock}>
      <div className={stl.block}>
        <div className={stl.imgBlock}>
          <h3 className={stl.header}>{props[0].title} </h3>
          <img className={stl.img} src={props[0].imgCircle} alt="img" />
        </div>
        {symptomBlock}
      </div>
    </div>
  );
};

export default Symptom;
