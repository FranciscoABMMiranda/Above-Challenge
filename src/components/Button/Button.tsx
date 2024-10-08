export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...remainingProps }) => {
  return (
    <button className={` ${className}`} {...remainingProps}>
      {children}
    </button>
  )
}
