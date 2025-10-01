export interface Advice {
  id: number | undefined;
  advice: string;
}

export interface AdviceResponse {
  slip: Advice;
}
