import stl from "./CardBlock.module.css";
import Card from "../Card/Card";

const CardBlock = ({ cards }: any) => {
  const cardsBlock = cards.map((item: any, index: number) => {
    return <Card key={index} card={item} />;
  });

  return <div className={stl.layout}>{cardsBlock}</div>;
};

export default CardBlock;
