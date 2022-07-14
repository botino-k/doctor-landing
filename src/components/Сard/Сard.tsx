//import stl from './CardDescription.module.css'
import AppGradeDescriptionBlock from "../CardDescriptionBlock/CardDescriptionBlock";

/*interface Props {

  }*/
  

const AppGradeCard = ({  card }:any) => {

  const descriptionBlock =  card.map((item:any) => {

    return (<section className = 'card'>
    <h3 className = 'card-header'>{item.title} </h3>
    <img src="" alt={item.title} />
    <AppGradeDescriptionBlock  description={item.description} />
  </section>)
  });

  return <div className="flax-layout">{descriptionBlock}</div>;
};

export default AppGradeCard;
