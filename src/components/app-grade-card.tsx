//import AppGradeDescription from "./app-grade-description";
import AppGradeDescriptionBlock from "./app-grade-description-block";


const AppGradeCard = ({  card }:any ) => {

  const descriptionBlock =  card.map((item: any) => {

    return (<section className = 'card'>
    <h3 className = 'card-header'>{item.title} </h3>
    <img src="" alt="adult" />
    <AppGradeDescriptionBlock  arr={item.description} />
  </section>)
  });

  return <div className="flax-layout">{descriptionBlock}</div>;
};

export default AppGradeCard;
