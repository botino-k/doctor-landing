const AppGradePhoto = (path:any ) => {
console.log(path)
  return( <div>
<h3>  {path.path.type} </h3>    
<img src={path.path.src} alt="pho"></img>
  </div>)
};

export default AppGradePhoto;
