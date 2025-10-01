import { useState } from 'react';
import { Title } from './components/Title/Title';
import './App.css';

interface Advice {
  id: number | undefined;
  advice: string;
}

function App() {
  const [advice, setAdvice] = useState<Advice>({
    id: undefined,
    advice: 'Be Happy ',
  });

  async function fetchRandomAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something went wrong!!!');
    }

    return response.json();
  }

  const handleFetchAdvice = async () => {
    try {
      const adviceObj = await fetchRandomAdvice();
      setAdvice(adviceObj?.slip);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="advice-card">
        <Title text={`ADVICE #${advice.id}`} />
        <blockquote className="quote">{`“ ${advice.advice} ”`}</blockquote>
        <div className="divider"></div>
        <div className="dice-container">
          <button onClick={handleFetchAdvice} className="dice-button"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
