import React, { createContext, PropsWithChildren, useState } from 'react'

interface ModalContextProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const ModalContext = createContext<ModalContextProps>({
  open: false,
  setOpen: () => {},
})

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
