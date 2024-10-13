import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, useModal } from '@components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HeaderButtons: React.FC = () => {
  const navigate = useNavigate()
  const { openModal } = useModal()

  const handleGoBack = () => navigate('/')

  return (
    <div className="flex justify-between w-full">
      <Button className="text-sm" onClick={handleGoBack}>
        <LeftOutlined className="mr-2" />
        {'Go back to episode list'}
      </Button>
      <Button className="text-sm" onClick={openModal}>
        {'Edit episode'}
        <EditOutlined className="ml-2" />
      </Button>
    </div>
  )
}
