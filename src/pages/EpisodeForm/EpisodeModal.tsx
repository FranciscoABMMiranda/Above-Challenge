import { Modal, useModal } from '@components'
import React from 'react'
import { EpisodeForm, EpisodeFormProps } from './EpisodeForm'

export const EpisodeModal: React.FC<EpisodeFormProps> = ({
  isEdit,
  data,
  onSubmitData,
}) => {
  const { open, closeModal } = useModal()

  return (
    <Modal
      open={open}
      onClose={closeModal}
      title={isEdit ? 'Edit this episode' : 'Add an episode'}
      className="md:px-8 py-4">
      <EpisodeForm isEdit={isEdit} onSubmitData={onSubmitData} data={data} />
    </Modal>
  )
}
