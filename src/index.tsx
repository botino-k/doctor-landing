import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import AppHeader from "./components/app-header";
import AppMainQuestion from "./components/app-main-question";
import AppGradeCard from "./components/app-grade-card";

const App = () => {

  const descriptionData = [
    {description: `Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.`,type:`adult`, id:1},
    {description: `По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.`,type:`adult`, id:2},
    {description: `По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.`, type:`adult`, id:3},
    {description: `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
    движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
    осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
    в отношении наличия СМА.
    `,type:`child`, id:4},
    {description: `Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
    терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
    дегенерации при прогрессировании заболевания.`, type:`child`, id:5},

  ]


  return (
    <div>
      <AppHeader />
      <AppMainQuestion/>
      <AppGradeCard text = {descriptionData}/>
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

