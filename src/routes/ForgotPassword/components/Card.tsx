import { Button } from "../../../components/ui/Button/Button";
import "../style.scss";

interface CardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  form: React.ReactNode;
  button: {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string;
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  };
}

const Card = ({ Icon, title, description, form, button }: CardProps) => {
  return (
    <div className="form">
      <div className="header">
        <div className="head-icon">
          <Icon color="var(--bg-primary-500)" />
        </div>
        <div className="head-info">
          <h2 className="label-md">{title}</h2>
          <p className="para-sm">{description}</p>
        </div>
      </div>
      {form}
      <div className="footer">
        <Button
          onClick={button.onClick}
          type="submit"
          className="login-btn"
          {...(button.props as any)}
        >
          {button.text}
        </Button>
      </div>
    </div>
  );
};

export default Card;
