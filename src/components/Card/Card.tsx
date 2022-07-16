import stl from './Card.module.css'
import CardDescriptionBlock from "../CardDescriptionBlock/CardDescriptionBlock";

interface Props {
  card: {
    title: string;
    img: string;
    description: string[];
  };
}
  

const Card = ({card}:Props) => {

    return (
      <section className={stl.card}>
        <div className={stl.imgBlock}>
          <h3 >{card.title} </h3>
          <div className={stl.img}>
            <img src={card.img} alt={card.title} />
          </div>
        </div>
        <CardDescriptionBlock description={card.description} />
      </section>
    );


};

export default Card;
