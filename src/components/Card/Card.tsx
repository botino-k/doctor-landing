import stl from './Card.module.css'
import CardDescriptionBlock from "../CardDescriptionBlock/CardDescriptionBlock";

/*interface Props {

  }*/
  

const Card = ({  card }:any) => {

  const descriptionBlock =  card.map((item:any) => {

    return (<section className = 'card'>
    <h3 className = 'card-header'>{item.title} </h3>
    <div className={stl.img}><img src={item.img} alt={item.title} /></div>
    <CardDescriptionBlock  description={item.description} />
  </section>)
  });

  return <div className="flax-layout">{descriptionBlock}</div>;
};

export default Card;
