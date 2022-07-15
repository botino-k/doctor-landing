import stl from "./Question.module.css";

const Question = () => {
  return (
    <div className={stl.block}>
      Сообщает ли один из ваших пациентов о следующих симптомах?
      <span className={stl.tip}> (нажмите на любую иконку и узнайте больше)</span>
    </div>
  );
};

export default Question;
