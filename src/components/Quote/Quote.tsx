import './Quote.css';

type Props = {
  quote: string;
};

export const Quote = ({ quote }: Props) => (
  <blockquote className="quote">{`“ ${quote} ”`}</blockquote>
);
