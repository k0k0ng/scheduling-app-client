import "./Button.css";
import { buttonSize, buttonType } from "./theme";

function Button({ size, type, onClick, children, className }: any) {
  const mergeclassName = `${className} ${buttonSize[size]} ${buttonType[type]}`;

  return (
    <button className={mergeclassName} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default Button;
