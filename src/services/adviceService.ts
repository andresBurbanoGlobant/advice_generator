import { AdviceResponse } from '../types';

export async function fetchRandomAdvice(): Promise<AdviceResponse> {
  const url = 'https://api.adviceslip.com/advice';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong!!!');
  }

  return response.json();
}
