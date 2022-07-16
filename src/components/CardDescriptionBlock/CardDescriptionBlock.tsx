import stl from './CardDescriptionBlock.module.css'
import CardDescription from '../CardDescription/CardDescription';

interface Props {
  description: string[];
}

const CardDescriptionBlock = ({ description }: Props) => {
  const descriptionBlock = description.map((item, index) => {

    return (
      <div key = {index} className={stl.block}>
        <CardDescription text={item} />
      </div>
    );
  });

  return <div className={stl.layout}>{descriptionBlock}</div>;
};
export default CardDescriptionBlock;
