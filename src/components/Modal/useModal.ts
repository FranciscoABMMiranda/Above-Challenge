import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

export const useModal = () => {
  const { open, setOpen } = useContext(ModalContext)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return {
    open,
    openModal,
    closeModal,
  }
}
