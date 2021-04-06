import React from "react";
import classes from './styles.module.css';

function App(){
  return (
    <>
  <header className={classes.header}>
    <div className={classes.label}>
    <img className={classes.labelImg} src="https://www.flaticon.com/svg/vstatic/svg/733/733585.svg?token=exp=1617684219~hmac=c94f476e43314bdb79d87c782eed1cc8" alt="Fale conosco"/>
    <a href="/" className={classes.labeltxt}>Fale conosco</a>
    </div>
  </header>

  <main>
    <div className={classes.container}>
      <div className={classes.bloco1}>
        <img className={classes.blocoImg} src="./img/img1.png" alt=""/>

        <h3>Titulo 1</h3>
        <p> content content content content content content content content</p>
        <button className={classes.button}> Botão para detalhes...</button>
      </div>

      <div className={classes.bloco2}>
        <img className={classes.blocoImg} src="./img/img2.png" alt=""/>

        <h3>Titulo 1</h3>
        <p> content content content content content content content content</p>
        <button className={classes.button}> Botão para detalhes...</button>
      </div>
    </div>
  </main>
  </>
  );
}

export default App;
