import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import { Backdrop } from '../Backdrop'
import { Button } from '../Button'
import { Typography } from '../Typography'

interface ConfirmationModalProps {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onClose: () => void
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  message,
  onConfirm,
  onClose,
}) => {
  if (!open) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <section className="fixed flex flex-col gap-y-8 md:max-w-[640px] md:max-h-[90vh] bg-slate-700 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <Button
          className="p-0 bg-transparent absolute right-5"
          onClick={onClose}>
          <CloseOutlined />
        </Button>
        <Typography as="h1" className="text-4xl">
          {title}
        </Typography>
        <Typography className="text-xl text-center">{message}</Typography>
        <div className="flex justify-between">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </div>
      </section>
    </>
  )
}
