import './App.css';
// import TodoRemoteApp from './pages/TodoRemoteApp';
// import CounterRemouteApp from './pages/CounterRemouteApp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo App</Link>
            </li>
            <li>
              <Link to="/about">Counter App</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Home} />
      </div>
    </Router>
  )
}

export default App
