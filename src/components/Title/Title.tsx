import styles from './Title.module.css';

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <div className={styles.title}>{text}</div>;
};
