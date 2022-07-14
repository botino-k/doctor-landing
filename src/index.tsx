import ReactDOM from 'react-dom/client';
import './index.css';

import AppGradeCard from "./components/Сard/Сard";

const App = () => {

  const data = [
    {
      id: 1,
      title: 'Взрослый',
      img: "url",
      description: [
        `Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.`,
        `По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.`,
        `По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.`]
    },
    {
      id: 2,
      title:'Ребенок',
      img: "url",
      description: [
        `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
        движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
        осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
        в отношении наличия СМА.`,
        `Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
        терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
        дегенерации при прогрессировании заболевания.`],
    },
  ];

  return (
    <div className='wrapper'>
      <h1 className="main-header">А вдруг СМА?</h1>
      <h2 className="choice-header">Выберите, кто Ваш пациент:</h2>
      <AppGradeCard card = {data}/>
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(  <App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

