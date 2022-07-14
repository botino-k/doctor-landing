//import stl from './CardDescriptionBlock.module.css'
import CardDescription from '../CardDescription/CardDescription';

interface Props {
  description: string[];
}

const AppGradeDescriptionBlock = ({ description }: Props) => {
  const descriptionBlock = description.map((item, index) => {

    return (
      <div key = {index} className="description-block">
        <CardDescription text={item} />
      </div>
    );
  });

  return <div className="card">{descriptionBlock}</div>;
};
export default AppGradeDescriptionBlock;
