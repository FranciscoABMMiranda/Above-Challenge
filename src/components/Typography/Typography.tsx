import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'p',
}) => {
  return <Component className={className}>{children}</Component>
}
