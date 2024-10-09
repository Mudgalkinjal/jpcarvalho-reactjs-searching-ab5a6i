interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode
}

const Button = ({ children }: IProps) => {
  return <button style={{ backgroundColor: 'red' }}>{children}</button>
}

export default Button
