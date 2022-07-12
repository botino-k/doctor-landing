import AppGradeDescription from "./app-grade-description";

const AppGradeCard = ({ text }: any) => {
  
  const descriptionBlock = text.map((item: any) => {
    const { id, ...itemProps } = item;
    return <AppGradeDescription {...itemProps} />;
  });

  return <div>{descriptionBlock}</div>;
};

export default AppGradeCard;
