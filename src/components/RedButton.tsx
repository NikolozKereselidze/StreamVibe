interface RedButtonProps {
  buttonText: string;
}

const RedButton = ({ buttonText }: RedButtonProps) => {
  return <button className="redButton">{buttonText}</button>;
};

export default RedButton;
