import classNames from "classnames";

const Button = (props) => {
  const { inactive, children, handleOnClick, classNameAdd } = props;
  return (
    <button
      className={classNames({
        "button--inactive": inactive,
        button: !inactive,
        [classNameAdd]: classNameAdd,
      })}
      onClick={() => {
        handleOnClick && handleOnClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
