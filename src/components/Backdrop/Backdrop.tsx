import React from 'react'

interface BackdropProps {
  onClick: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      className="fixed w-full h-full left-0 top-0 opacity-80 bg-slate-900"
      onClick={onClick}
    />
  )
}
