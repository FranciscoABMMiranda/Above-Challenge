import { Modal, useModal } from '@components'
import React from 'react'
import { EpisodeForm } from './EpisodeForm'

interface EpisodeModalProps {
  onSuccess: () => void
  isEdit?: boolean
}

export const EpisodeModal: React.FC<EpisodeModalProps> = ({
  isEdit,
  onSuccess,
}) => {
  const { open, closeModal } = useModal()

  return (
    <Modal
      open={open}
      onClose={closeModal}
      title={isEdit ? 'Edit this episode' : 'Add an episode'}
      className="md:px-8 py-4">
      <EpisodeForm onSuccess={onSuccess} />
    </Modal>
  )
}
