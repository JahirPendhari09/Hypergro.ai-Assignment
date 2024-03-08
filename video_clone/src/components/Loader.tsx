import React from 'react';
import  style from './component.module.css';

const Loader: React.FC = () => {
  return <div className={style.loaderDiv}><h1 className={style.loader}></h1></div>;
};

export default Loader;