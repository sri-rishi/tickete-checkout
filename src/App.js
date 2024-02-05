import { useEffect } from 'react';
import './App.css';
import { BookingSummary, Header } from './components';

function App() {

  useEffect(() => {
    document.title = "tickete Assignment"
  }, [])

  return (
    <div className="App">
      <Header />
      <BookingSummary />
    </div>
  );
}

export default App;
