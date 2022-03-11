import React, { useState } from 'react';
import logo from './img/logo.png'

import logoDiv from './javascript/logo.js'
import ColorCard from './javascript/colorcard.js';

import './css/style.css'

function App(){
  
  const [nome, setNome] = useState('')
  const [nick, setNick] = useState(' ')
  const [estado, setEstado] = useState(' ')
  const [cidade, setCidade] = useState(' ')
  const [numero, setNumero] = useState(' ')

  return (
    <main>
      <section className='leftSide'>
      <img src={logo}></img>
          <div className='leftSideText'>

            <div>
             <label>Coloque seu nome</label>
             <input type='text'value={nome} onChange={(e) => {setNome(e.target.value.toUpperCase())}}></input>
             </div>

             <div>
             <label>Nick</label>
             <input type='text' value={nick} onChange={(e) => {setNick(e.target.value)}}></input>
             </div>

             <div>
             <label>Estado</label>
             <input type='text' value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
             </div>

             <div>
             <label>Cidade</label>
             <input type='text' value={cidade} onChange={(e) => {setCidade(e.target.value)}}></input>
             </div>

             <div>
             <label>Numero da carteira</label>
             <input type='number'min={0} value={numero} onChange={(e) => {setNumero(e.target.value)}}></input>
             </div>

          </div>

          <div className='customCard'>
                <p>Escolha sua cor</p>
              <div className='colorDiv'>
                  <input type="color" className='color' id="colorCard" onChange={ColorCard}/>
                </div>
          </div>

          <div className="logoCard">
            <p>Escolha sua logo</p>
            <div className="logoDiv">
              <div className="logoC" onClick={logoDiv}>
                <img src="https://i.postimg.cc/FHjNM346/logo1.png" />
              </div>
              <div className="logoC" onClick={logoDiv}>
              <img src="https://i.postimg.cc/5tbbby92/logo4.png" />
              </div>
              <div className="logoC" onClick={logoDiv}>
              <img src="https://i.postimg.cc/g0XXTRbQ/5.png" />
              </div>
              <div className="logoC" onClick={logoDiv}>
              <img src="https://i.postimg.cc/SKdqs4j7/logo2.png" />
              </div>
            </div>
          </div>

            <footer className="footer">
              <img src={logo}></img>
              <div className="mediaSocial">
              <a href="https://www.youtube.com/c/ImperialeSportsbr"><img src="https://img.icons8.com/windows/50/00d84f/youtube-play.png"/></a>
              <a href="https://www.instagram.com/imperialesportsbr/"><img src="https://img.icons8.com/windows/50/00d84f/instagram-new.png"/></a>
              <a href="https://twitter.com/imperialesports"><img src="https://img.icons8.com/windows/50/00d84f/twitter.png"/></a>
              <a href="https://www.facebook.com/imperialesportsbr"><img src="https://img.icons8.com/windows/50/00d84f/facebook-f--v1.png"/></a>
              </div>
            </footer>
      </section>

      <section className='rightSide'>

      <div className='card'>
         <div className="cardCont">
            <h1>{nome}</h1>
            <h2>{nick}</h2>
            <div className="midTextCard">

                <div>
                    <span>Estado</span>
                    <p>{estado}</p>
                </div>

                <div>
                    <span>Cidade</span>
                    <p>{cidade}</p>
                </div>

                <div>
                    <span>Sócio tier</span>
                    <p>Soldado</p>
                </div>
            </div>
            <h3>{numero}</h3>
            </div>
      </div>
      </section>
    </main>
  );
}

export default App;
