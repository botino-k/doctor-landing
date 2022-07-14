import stl from './CardDescription.module.css'

interface Props {
  text: string;
}

const CardDescription = ({ text }: Props) => {
  
  return <span className={stl.text} >{text} </span>;
};

export default CardDescription;
