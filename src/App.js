import React from "react";
import Select from "react-select";
import classes from "./styles.module.css";

function App() {
  const options = [{ value: "Selecione", label: "Selecione" }];
  return (
    <>
      <header className={classes.header}>
        <div className={classes.label}>
          <img
            className={classes.labelImg}
            src="https://cdn.icon-icons.com/icons2/99/PNG/512/whatsapp_socialnetwork_17360.png"
            alt="Fale conosco"
          />
          <a href="/" className={classes.labeltxt}>
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        <div className={classes.container}>
          <div className={classes.bloco1}>
            <h3 className={classes.blocoTitle}>Titulo 1</h3>
            <img
              className={classes.blocoImg}
              src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img1.png?raw=true"
              alt=""
            />
            <div className={classes.content}>
              <p>
                Content.. ... content. ... content.. .. content.. .. content ..
                content....content....content....content....content....
                content....content....
              </p>
            </div>
            <button className={classes.button}> Botão para detalhes...</button>
          </div>

          <div className={classes.bloco2}>
            <h3 className={classes.blocoTitle}>Titulo 1</h3>
            <img
              className={classes.blocoImg}
              src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img2.png?raw=true"
              alt=""
            />
            <div className={classes.content}>
              <p>
                Content.. ... content. ... content.. .. content.. .. content ..
                content....content....content....content....content....
                content....content....
              </p>
            </div>
            <button className={classes.button}> Botão para detalhes...</button>
          </div>
        </div>

        <div className={classes.titulo3}>
          <h3 className={classes.title}>Titulo 3</h3>
          <div className={classes.question}>
            <p>Pergunta 1?</p>
            <input
              className={classes.input}
              type="text"
              placeholder="Digite a resposta"
            />
          </div>

          <div className={classes.question}>
            <p>Pergunta 2?</p>
            <input
              className={classes.input}
              type="text"
              placeholder="Digite a resposta"
            />
          </div>

          <div className={classes.question}>
            <p>Pergunta 3?</p>
            <Select className={classes.input} options={options} />
          </div>
          <div className={classes.question}>
            <img
              className={classes.square}
              src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"
              alt=""
            />
          </div>
        </div>

        <div className={classes.titulo4}>
          <h3>Titulo 4</h3>
          <ul className={classes.lista}>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>

            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.courses}>
                <img
                  src="https://github.com/georgetonjr/kroton-teste/blob/master/src/img/img3.png?raw=true"
                  alt=""
                />
                <div>
                  <h5>texto...</h5>
                  <h4>Titulo...</h4>
                  <button className={classes.title4txt}>Acessar</button>
                </div>
              </div>
            </li>
          </ul>

          <a href="/" className={classes.loadMoreCourses}>
            + Carregar mais cursos
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
