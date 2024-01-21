interface Clase {
  children: JSX.Element;
  props?: String;
}

export const Container = ({ children, props }: Clase) => {
  return (
    <div className={`max-w-screen-lg mr-auto ml-auto ${props}`}>{children}</div>
  );
};
