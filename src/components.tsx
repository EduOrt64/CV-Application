export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Button({
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}

export function Input({
  children,
  className = "",
  type = "text",
  ...rest
}: InputProps) {

return (
    <input type={type} className = {className} {...rest}>

        {children}
        
    </input>


)

}
