import "./Button.css";
import { buttonSize, buttonType } from "./theme";

function Button({
  size,
  type,
  onClick,
  className,
  iconLeft,
  spanClassName,
  children,
}: any) {
  const mergeclassName = `${className} px-3 px-2 sm:${buttonSize[size]} ${buttonType[type]}`;

  return (
    <button className={mergeclassName} onClick={onClick} type="button">
      {iconLeft}
      <span className={`text-sm md:text-base ${spanClassName}`}>
        {children}
      </span>
    </button>
  );
}

export default Button;
