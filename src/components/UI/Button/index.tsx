interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <button>{children}</button>;
};

export default Button;
