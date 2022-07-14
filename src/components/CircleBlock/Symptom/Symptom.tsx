
import stl from './Symptom.module.css';


const Symptom = ({props}:any) => {

  console.log(props)
  return(
    <div className={stl.block}>
      <div className={stl.icon}>
        <img src={props[0].img} alt="img" />
       
      </div>
      <div className={stl.description}>
      {props[0].description}
      </div>
    </div>
  )
  
};


export default Symptom;