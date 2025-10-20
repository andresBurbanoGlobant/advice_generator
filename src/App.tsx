import { useState, useEffect } from 'react';
import { Title, Divider, Quote } from './components';
import { fetchRandomAdvice } from './services';
import { Advice } from './types';
import './App.css';

function App() {
  const [advice, setAdvice] = useState<Advice>({
    id: undefined,
    advice: 'Be Happy ',
  });

  const handleFetchAdvice = async () => {
    try {
      const adviceObj = await fetchRandomAdvice();
      setAdvice(adviceObj?.slip);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    handleFetchAdvice();
  }, []);

  return (
    <div className='main-container'>
      <div className='advice-card'>
        <Title text={`ADVICE #${advice.id}`} />
        <Quote quote={advice.advice} />
        <Divider />
        <div className='dice-container'>
          <button onClick={handleFetchAdvice} className='dice-button'></button>
        </div>
      </div>
    </div>
  );
}

export default App;
