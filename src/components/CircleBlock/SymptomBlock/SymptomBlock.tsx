import stl from "./SymptomBlock.module.css";
import SymptomCard from '../SymptomCard/SymptomCard';

interface SymptomType {
  id?: number;
  img: string;
  description: string;
};

const SymptomBlock = ({ props }:any) => {

  const symptomBlock = props.symptoms.map((item: SymptomType , index: number) => {
    const circStyle = {
      transform: `rotate(calc(360deg/${props.symptoms.length}*${index}))`};
    const rotateSelf = {
      transform: `rotate(calc(360deg/-${props.symptoms.length}*${index}))`};

    let descriptionStyle = {
      top: ``,
      left: ``,
      right: ``,
      bottom: ``,
    };

    let deg: number = (360 / props.symptoms.length) * index;

    if (deg < 90 || deg > 270) {
      descriptionStyle.right = `calc(100% + 30px)`;
    } else if (deg === 90) {
      descriptionStyle.top = `calc(0% - 30px)`;
    } else if (deg > 90 && deg < 270) {
      descriptionStyle.left = `calc(100% + 30px)`;
    } else if (deg === 270) {
      descriptionStyle.top = `calc(150% )`;
    }

    return (
      <SymptomCard key = {index} data={item} styles={[circStyle, rotateSelf, descriptionStyle]} />
         );
  });

  return (
    <div className={stl.mainBlock}>
      <div className={stl.block}>
        <div className={stl.imgBlock}>
          <h3 className={stl.header}>{props.title} </h3>
          <img className={stl.img} src={props.imgCircle} alt="img" />
        </div>
        {symptomBlock}
      </div>
    </div>
  );
};

export default SymptomBlock;
