import { useEffect } from 'react';
import './App.css';
import { Header } from './components';

function App() {

  useEffect(() => {
    document.title = "tickete Assignment"
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
