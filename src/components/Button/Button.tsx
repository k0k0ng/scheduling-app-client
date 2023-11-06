import "./Button.css";
import { buttonSize, buttonType } from "./theme";

function Button({
  size,
  type,
  onClick,
  className,
  iconLeft,
  iconRight,
  iconOnly,
  spanClassName,
  children,
}: any) {
  const mergeclassName = `${className} ${buttonSize[size]} ${buttonType[type]}`;

  return (
    <button className={mergeclassName} onClick={onClick} type="button">
      {iconLeft}
      <span className={` ${spanClassName}`}>
        {children}
        {iconOnly}
      </span>
      {iconRight}
    </button>
  );
}

export default Button;
