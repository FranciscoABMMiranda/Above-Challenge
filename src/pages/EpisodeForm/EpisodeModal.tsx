import { Modal, useModal } from '@components'
import React from 'react'
import { EpisodeForm } from './EpisodeForm'

export const EpisodeModal: React.FC = () => {
  const { open, closeModal } = useModal()

  return (
    <Modal open={open} onClose={closeModal} title="Edit this episode">
      <EpisodeForm />
    </Modal>
  )
}
