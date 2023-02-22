import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {

  const butClick = () => {

  }

  const [ind, setInd] = React.useState(2);

  const showSlides = (n) => {
      console.log(ind);
      let i, slideIndex;
  }

  const nextSlide = () => {
      console.log("next");
      if(ind!=3) setInd(ind+1);
      else setInd(1);
      showSlides(ind+1);
  }

  const prevSlide = () => {
      console.log("prev");
      if(ind!=1) setInd(ind-1);
      else setInd(3);
      showSlides(ind-1);
  }

  return (
    <div className="App">
      <div className="logo">
        <div className='logo-flex'>
          <img src="../monkeyfilogo.png" style={{width:"116px", height:"109px"}}></img>
          <div style={{display:"flex", flexDirection:"column"}}>
            <img src="../monkeyfiletters.png" style={{width:"255px", height:"40px", paddingTop:"12%"}} />
            <p className="logo-text">Crypto made easy</p>
          </div>
        </div>
        <div className='navbar'>
          <div style={{display:"flex"}}>
            <button onClick={butClick.bind(this)}>About us</button>
            <button>Wallet</button>
            <button>Markets</button>
            <button>My Chat</button>
            <button>LitePaper</button>
            <button>Sign Up</button>
            <button className='signin'>Sign in</button>
          </div>
        </div>
      </div>

      <button className='secure'>
        <img src="../Vector.png" style={{margin:"10px", alignSelf:"center",width:"15%", height:"50%"}}></img>
        <div className="secure-flex">
          <p style={{height:"5px", marginBlockEnd:"0px", fontWeight:"bold"}}>100% Secure</p>
          <p style={{fontSize:"10px", marginBlockStart:"15px"}}>Your funds are safe!</p>
        </div>
      </button>

      <div style={{display:"flex"}}>
        <div className='advert'>
          <div className='soci'>TRADE, SOCIALIZE AND EARN CRYPTO</div>
          <div className='crypto'>trade the most popular crypto currencies, at ease.</div>
          <div className='monkey'>Monkey Finance is a next-generation cryptocurrency exchange that offers users on-boarding education, rewards, and an incredible social aspect to buying/selling cryptos.</div>
          <div style={{display:"flex", paddingTop:"80px"}}>
            <button className='wallet'>Create Wallet</button>
            &tab;
            <button className='wallet'>Socialize</button>
          </div>
        </div>
        <img className="MF" src="../MF.png"></img>
      </div>

      <div className='market'>
        <p className='big'>Markets</p>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className='sma'>MF/USD</p>
            <p className="big">0.0342</p>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">1.92%</p>
            <p className="big">USD</p>
          </div>
          <img src="../Vector1.png"></img>
        </div>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">MF/USDC</p>
            <p className="big">0.0256</p>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">1.92%</p>
            <p className="big">USDC</p>
          </div>
          <img src="../Vector2.png"></img>
        </div>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">MF/BUSD</p>
            <p className="big">0.0342</p>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">1.92%</p>
            <p className="big">BUSD</p>
          </div>
          <img src="../Vector3.png"></img>
        </div>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">MF/EUR</p>
            <p className="big">0.0342</p>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="sma">1.92%</p>
            <p className="big">EUR</p>
          </div>
          <img src="../Vector4.png"></img>
        </div>
      </div>
      <div className='wallets'>
        <p className='big'>Wallets</p>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className='sma'>BTC</p>
            <p className="sma">You Got</p>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className="yel">USD</p>
            <p className="yel">329, 009ETH</p>
          </div>
          <div>
          </div>
        </div>
        <button className='wallet'>Claim Rewards</button>
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div className='bitcoin'>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
        </div>
        <div className='bitcoin'>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
        </div>
        <div className='bitcoin'>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
          <img src="../bitcoin.png"></img>
        </div>
      </div>
      <br/><br/>
      <div className="lgtxt w60">The first-ever social exchange, because centralized exchanges don’t have to be boring!</div>
      <div className="smtxt w30">Monkey Finance has a variety of features that make it the best place to start trading</div>
      <div className='portfolio'>
        <img src="../Card 1.png"></img>
        <img src="../Card 3.png" style={{position:"relative", top:"40px"}}></img>
        <img src="../Card 2.png"></img>
      </div>
      <br/><br/>
      <div className="lgtxt w40">One click, instant payout with credit or debit card.</div>
      <div className="smtxt w40">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</div>
      <br/>
      <div className='buynow'>
        <div style={{display:"flex"}}>
          <button className='mybut' style={{color:"#CAFC01"}}>Buy</button>|
          <button className='mybut'>Sell</button>
        </div>
        <div>1 BTC is roughly</div>
        <div>20,073.27 USD</div>
        <img src="../Form.png"></img><br/>
        <img src="../Form1.png"></img>
        <br/>
        <button>Buy Now</button>
      </div>
      <div className='smtxt'>We accept payment with many methods:</div>
      <img src="../Payment.png" style={{alignSelf:"center", width:"30%"}}></img>
      <div className='lgtxt w60'>Crypto education, awareness and inclusivity to Latin America and the rest of the world</div>
      <div className='smtxt w40'>We believe MonkeyFi is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</div>
      <div style={{display:"flex", paddingTop:"20px", alignSelf:"center"}}>
        <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
          <img src="../Clarify.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Clarify</div>
          <div className='smtxt'>We help you make sense of the coins, the terms, the dense charts and market changes.</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
          <img src="../Confidence.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Confidence</div>
          <div className='smtxt'>Our markets are always up to date, sparking curiosity with real-world relevance.</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
          <img src="../Community.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Community</div>
          <div className='smtxt'>We support the crypto community, putting data in the hands which need it most.</div>
        </div>
      </div>
      <div className='lgtxt'>What the media will say about MonkeyFi?</div>
      <div className="slideshow-container">
          <a className="prev" onClick={prevSlide.bind()}>&#10094;</a>
          <div className="mySlides">
            <img src={"../img"+ind+".png"} style={{width:"100%"}} />
          </div>
          <a className="next" onClick={nextSlide.bind()}>&#10095;</a>
      </div>
      <div className='lgtxt'>Build your crypto portfolio anywhere.</div>
      <div className='smtxt'>A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.</div>
      <div className='mobile-container'>
        <img src="../Illustration.png" style={{width:"700px", alignSelf:"center"}}></img>
        <div style={{display:"flex", alignSelf:"center"}}>
          <div className='smtxt' style={{paddingTop:"15px"}}>The</div>
          <img src="../monkeyfilogo.png" style={{width:"40px",height:"40px"}}></img>
          <img src="../monkeyfiletters.png" style={{width:"80px",height:"20px", alignSelf:"center"}}></img>
          <div className='smtxt' style={{paddingTop:"15px"}}>&nbsp;Wallet Mobile App is Coming!</div>
        </div>
        <div style={{display:"flex", alignSelf:"center"}}>
          <img src="../google.png" className='google'></img>
          <img src="../app.png" className='google'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
