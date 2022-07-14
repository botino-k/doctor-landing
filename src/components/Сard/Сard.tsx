import stl from './Card.module.css'
import AppGradeDescriptionBlock from "../CardDescriptionBlock/CardDescriptionBlock";

/*interface Props {

  }*/
  

const AppGradeCard = ({  card }:any) => {

  const descriptionBlock =  card.map((item:any) => {

    return (<section className = 'card'>
    <h3 className = 'card-header'>{item.title} </h3>
    <div className={stl.img}><img src={item.img} alt={item.title} /></div>
    <AppGradeDescriptionBlock  description={item.description} />
  </section>)
  });

  return <div className="flax-layout">{descriptionBlock}</div>;
};

export default AppGradeCard;
