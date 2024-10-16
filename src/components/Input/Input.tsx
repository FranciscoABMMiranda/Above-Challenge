import { SearchOutlined } from '@ant-design/icons'
import React, { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  isSearch?: boolean
  fullWidth?: boolean
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  fullWidth = false,
  isSearch = false,
  ...remainingProps
}) => {
  const labelId = useId()

  return (
    <div
      className={`flex flex-col items-start gap-2 ${
        fullWidth ? 'w-full' : ''
      }`}>
      <label id={labelId}>
        {isSearch && <SearchOutlined className="mr-2" />}
        {label}
      </label>
      <input
        className={`text-lg p-2 rounded-md ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        aria-labelledby={labelId}
        {...remainingProps}
      />
    </div>
  )
}
