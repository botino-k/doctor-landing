import stl from './ChoiceHeader.module.css'

interface Props {
  text: string;
}

const ChoiceHeader = ({ text }:  Props ) => {
    return <h2 className={stl.header}>{text}</h2>
};

export default ChoiceHeader;
