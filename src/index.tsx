import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppHeader from "./components/app-header";
import AppMainQuestion from "./components/app-main-question";
import AppGradeCard from "./components/app-grade-card";
import AppGradePhoto from "./components/app-grade-photo";
import AppGradeDescriptionBlock from "./components/app-grade-description-block";
import AppGradeDescription from "./components/app-grade-description";

const App = () => {

 /* const descriptionData = [
    {description: `Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.`,type:`Взрослый`, id:1},
    {description: `По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.`,type:`Взрослый`, id:2},
    {description: `По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.`, type:`Взрослый`, id:3},
    {description: `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
    движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
    осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
    в отношении наличия СМА.`,type:`Ребенок`, id:4},
    {description: `Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
    терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
    дегенерации при прогрессировании заболевания.`, type:`Ребенок`, id:5},

  ]*/

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

  const photoData = [
    {src:'./img/34bba82c050118fb53a482e94e5f896c.png' ,type:`Взрослый`, id:1},
    {src:'./img/img/6ac34e492613415d0bee2d14db511e5b.png' ,type:`Ребенок`, id:2}
  ]

  return (
    <div className='wrapper'>
      <AppHeader />
      <AppMainQuestion/>
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

