import stl from "./MainHeader.module.css";

interface CardDescriptionType  {
  text: string;
};

const CardDescription = ({ text }: CardDescriptionType) => {
  return <h1 className={stl.header}>{text}</h1>;
};

export default CardDescription;
