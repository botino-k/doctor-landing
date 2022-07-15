import stl from "./Symptom.module.css";

//interface Props {
//  props: string
//}

const Symptom = ({ props }: any) => {
  const symptomBlock = props[0].symptoms.map((item: any, index: number) => {
    
    const circStyle = {
      transform: `rotate(calc(360deg/${props[0].symptoms.length}*${index + 1}))`};
    const rotate = {
      transform: `rotate(calc(360deg/-${props[0].symptoms.length}*${index + 1}))`};

    return (
      <div style={circStyle} className={stl.symptomBlock}>
        <div style={rotate} className={stl.symptom}>
          <div className={stl.icon}>
            <img src={item.img} alt="img" />
          </div>
          <div className={stl.description}>{item.description}</div>
        </div>
      </div>
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
