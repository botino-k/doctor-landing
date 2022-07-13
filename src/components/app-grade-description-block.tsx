//import AppGradeDescription from "./app-grade-description";
import AppGradeDescription from "./app-grade-description";


const AppGradeDescriptionBlock = ({ arr}:any) => {
  console.log(arr)

  const descriptionBlock =  arr.map((item: any) => {
   
    return (<div className = 'description-block'>
    <AppGradeDescription text={item} />
  </div>)
  });
  console.log( descriptionBlock)

  return <div className="card">{descriptionBlock}</div>;
};
export default AppGradeDescriptionBlock;
