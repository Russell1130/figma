import logo from './logo.svg';
import './App.css';

function App() {

  const butClick = () => {

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
          </div>
        </div>
        <div style={{display:"flex"}} className="sign">
          <button className='signup'>Sign Up</button>
          <button className='signin'>Sign in</button>
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
          <p className='soci'>TRADE, SOCIALIZE AND EARN CRYPTO</p>
          <p className='crypto'>trade the most popular crypto currencies, at ease.</p>
          <p className='monkey'>Monkey Finance is a next-generation cryptocurrency exchange that offers users on-boarding education, rewards, and an incredible social aspect to buying/selling cryptos.</p>
          <div style={{display:"flex"}}>
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
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
        </div>
        <div className='bitcoin'>
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
        </div>
        <div className='bitcoin'>
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
          <img src="../usd.png"></img>
        </div>
      </div>
      <br/><br/>
      <div className="lgtxt">The first-ever social exchange, because centralized exchanges don’t have to be boring!</div>
      <div className="smtxt">Monkey Finance has a variety of features that make it the best place to start trading</div>
      <div className='portfolio'>
        <img src="../portfolio.png"></img>
        <img src="../portfolio.png" style={{position:"relative", top:"40px"}}></img>
        <img src="../portfolio.png"></img>
      </div>
      <br/><br/>
      <div className="lgtxt">One click, instant payout with credit or debit card.</div>
      <div className="smtxt">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</div>
      <br/>
      <div className='buynow'>
        <div style={{display:"flex"}}>
          <button className='signup' style={{color:"#CAFC01"}}>Buy</button>|
          <button className='signup'>Sell</button>
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
      <div className='lgtxt'>Crypto education, awareness and inclusivity to Latin America and the rest of the world</div>
      <div className='smtxt'>We believe MonkeyFi is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</div>
      <div style={{display:"flex", paddingTop:"20px", alignSelf:"center"}}>
        <div style={{display:"flex", flexDirection:"column", width:"200px"}}>
          <img src="../Clarify.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Clarify</div>
          <div className='smtxt'>We help you make sense of the coins, the terms, the dense charts and market changes.</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", width:"200px"}}>
          <img src="../Confidence.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Confidence</div>
          <div className='smtxt'>Our markets are always up to date, sparking curiosity with real-world relevance.</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", width:"200px"}}>
          <img src="../Community.png" style={{width:"30%", alignSelf:"center"}}></img>
          <div className='lgtxt'>Community</div>
          <div className='smtxt'>We support the crypto community, putting data in the hands which need it most.</div>
        </div>
      </div>
      <div className='lgtxt'>What the media will say about MonkeyFi?</div>
    </div>
  );
}

export default App;
