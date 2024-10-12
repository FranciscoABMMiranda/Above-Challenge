import React, { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  ...remainingProps
}) => {
  const labelId = useId()

  return (
    <div className="flex flex-col items-start gap-2">
      <label id={labelId}>{label}</label>
      <input
        className={`text-lg p-2 rounded-md ${className}`}
        aria-labelledby={labelId}
        {...remainingProps}
      />
    </div>
  )
}
