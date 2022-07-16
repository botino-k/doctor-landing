import stl from './MainHeader.module.css'

interface Props {
  text: string;
}

const CardDescription = ({ text }: Props) => {
    return <h1 className={stl.header}>{text}</h1>
};

export default CardDescription;
