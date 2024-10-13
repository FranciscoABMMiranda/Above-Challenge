import React, { useId } from 'react'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  fullWidth?: boolean
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  className,
  fullWidth = false,
  ...remainingProps
}) => {
  const labelId = useId()

  return (
    <div
      className={`flex flex-col items-start gap-2 ${
        fullWidth ? 'w-full' : ''
      }`}>
      <label id={labelId}>{label}</label>
      <textarea
        className={`text-lg p-2 rounded-md ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        aria-labelledby={labelId}
        {...remainingProps}
      />
    </div>
  )
}
