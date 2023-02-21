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
      </div>

      <div className='navbar'>
        <div style={{display:"flex"}}>
          <button onClick={butClick.bind(this)}>About us</button>
          <button>Wallet</button>
          <button>Markets</button>
          <button>My Chat</button>
          <button>LitePaper</button>
        </div>
        <div style={{display:"flex"}} className="sign">
          <button className='signup'>Sign Up</button>
          <button className='signin'>Sign in</button>
          <button className='secure'>
            <img src="../Vector.png" style={{margin:"10px", alignSelf:"center",width:"15%", height:"50%"}}></img>
            <div className="secure-flex">
              <p style={{height:"5px", marginBlockEnd:"0px", fontWeight:"bold"}}>100% Secure</p>
              <p style={{fontSize:"10px", marginBlockStart:"15px"}}>Your funds are safe!</p>
            </div>
          </button>
        </div>
      </div>

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
      <div>
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
      <p className="socialexchange">The first-ever social exchange, because centralized exchanges don’t have to be boring!</p>
      <p className="monkeyfinance">Monkey Finance has a variety of features that make it the best place to start trading</p>
      <div className='portfolio'>
        <img src="../portfolio.png"></img>
        <img src="../portfolio.png" style={{position:"relative", top:"40px"}}></img>
        <img src="../portfolio.png"></img>
      </div>
      <br/><br/>
      <p className="oneclick">One click, instant payout with credit or debit card.</p>
      <p className="becomea">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</p>
    </div>
  );
}

export default App;
