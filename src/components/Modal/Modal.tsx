import { CloseOutlined } from '@ant-design/icons'
import React, { PropsWithChildren } from 'react'
import { Button } from '../Button'
import { Typography } from '../Typography'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  open,
  children,
  title,
  onClose,
}) => {
  if (!open) return null

  return (
    <>
      <div
        className="fixed w-full h-full left-0 top-0 opacity-80 bg-slate-900"
        onClick={onClose}
      />

      <section className="fixed w-full h-full md:max-w-[640px] md:max-h-[90vh] bg-slate-700 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <Button
          className="p-0 bg-transparent absolute right-5"
          onClick={onClose}>
          <CloseOutlined />
        </Button>
        {title !== undefined && (
          <Typography as="h1" className="text-4xl">
            {title}
          </Typography>
        )}
        {children}
      </section>
    </>
  )
}
