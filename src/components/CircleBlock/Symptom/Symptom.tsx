import stl from "./Symptom.module.css";


//interface Props {
//  props: string
//}

const Symptom = ({ props }: any) => {
  const symptomBlock = props[0].symptoms.map((item: any) => {
    const circStyle ={  transform: "translate(calc)"};
    return (
      <div style= {circStyle } className={stl.symptomBlock}>
        <div className={stl.icon}>
          <img src={item.img} alt="img" />
         
        </div>
        <div className={stl.description}>{item.description}</div>
      </div>
    );
  });

  return (
    <div className={stl.block}>
      <div className={stl.imgBlock}>
        <img src={props[0].imgCircle} alt="img" />
      </div>
      {symptomBlock}
    </div>
  );
};

export default Symptom;
