import './App.css';
import MyMap from './MyMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/GoldenGateBridge.jpg" className="App-logo" alt="logo" />
        <p className="Intro">
          シリコンバレーの"風"を日本のIT市場に・・・<br />
          IT発祥の地、シリコンバレーの最先端技術を基にした<br />
          高度なクラウドインテグレションをお届けします。
        </p>
        <a
          className="App-link"
          href="https://www.ynoc.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn YNOC
        </a>
        <MyMap />
      </header>
    </div>
  );
}

export default App;
