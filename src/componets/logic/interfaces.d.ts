export interface CardInterface {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  children: JSX.Element;
}
