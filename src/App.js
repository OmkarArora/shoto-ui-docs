import './App.css';
import { Header, Sidenav } from './components';

function App() {
  return (
    <div className="App">
      <div className="container-header"><Header/></div>
      <div className="container-sidenav"><Sidenav/></div>
      <div className="container-main">main content</div>
    </div>
  );
}

export default App;
