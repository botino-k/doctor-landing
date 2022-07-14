import ReactDOM from 'react-dom/client';
import './index.css';
import IMAGES from "./img";

import AppGradeCard from "./components/Сard/Сard";
import Symptom from "./components/CircleBlock/Symptom/Symptom";


const App = () => {

  const data = [
    {
      id: 1,
      title: "Взрослый",
      img: IMAGES.adult,
      imgCircle: IMAGES.maskGrp,
      description: [
        `Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.`,
        `По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.`,
        `По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.`,
      ],
      symptoms: [
        {id: 1, img: IMAGES.circle2, description: `Сколиоз` },
        {id: 2, img: IMAGES.circle10, description: `Ограниченная способность поднимать руки и переносить предметы`},
        {id: 3, img: IMAGES.circle9, description: `Нарушения жевания и глотания`},
        {id: 4, img: IMAGES.circle8, description: `Дыхательная недостаточность/ респираторная дисфункция`},
        {id: 5, img: IMAGES.circle7, description: `Неспособность бегать, изменение походки`},
        {id: 6, img: IMAGES.circle6, description: `Контрактура суставов`},
        {id: 7, img: IMAGES.circle5, description: `Вывих бедра`},
        {id: 8, img: IMAGES.circle4, description: `Утомляемость`},
      ],
    },
    {
      id: 2,
      title: "Ребенок",
      img: IMAGES.child,
      description: [
        `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
        движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
        осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
        в отношении наличия СМА.`,
        `Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
        терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
        дегенерации при прогрессировании заболевания.`,
      ],
    },
  ];

  return (
    <div className='wrapper'>
      <h1 className="main-header">А вдруг СМА?</h1>
      <h2 className="choice-header">Выберите, кто Ваш пациент:</h2>
      <AppGradeCard card = {data}/>
      <Symptom props= {data}/> 
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

