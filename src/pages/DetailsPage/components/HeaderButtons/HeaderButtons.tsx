import { DeleteOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, ConfirmationModal, useModal } from '@components'
import { useDeleteEpisode } from '@services'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonsProps {
  episodeId: string
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ episodeId }) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const navigate = useNavigate()
  const { openModal } = useModal()

  const handleGoBack = () => navigate('/')
  const onSuccessDelete = () => {
    handleGoBack()
    alert('Episode deleted')
  }
  const { mutate } = useDeleteEpisode({ onSuccess: onSuccessDelete })

  return (
    <div className="flex justify-between w-full">
      <ConfirmationModal
        open={openConfirmationModal}
        title="Delete episode"
        message="Are you sure you want to delete this episode?"
        onClose={() => setOpenConfirmationModal(false)}
        onConfirm={() => mutate(episodeId)}
      />
      <Button className="text-sm" onClick={handleGoBack}>
        <LeftOutlined className="mr-2" />
        {'Go back to episode list'}
      </Button>
      <div className="flex ml-2 gap-3">
        <Button
          className="text-sm"
          onClick={() => setOpenConfirmationModal(true)}>
          {'Delete episode'}
          <DeleteOutlined className="ml-2" />
        </Button>
        <Button className="text-sm" onClick={openModal}>
          {'Edit episode'}
          <EditOutlined className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
