import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Input, Typography, useModal } from '@components'
import { useCreateEpisode } from '@services'
import { debounce } from '@utils'
import { useState } from 'react'
import { useApollo } from '../../services/api/websocketApollo'
import { EpisodeModal } from '../EpisodeForm'
import { EpisodeList } from './components'

const DEBOUNCE_TIMEOUT = 400

export const SearchPage = () => {
  const [search, setSearch] = useState('')
  const { openModal, closeModal } = useModal()

  const handleSearch = debounce(setSearch, DEBOUNCE_TIMEOUT)
  const handleCreateSuccess = () => {
    alert('Episode created successfully!')
    closeModal()
  }
  const { createData, deleteData, updateData } = useApollo()
  console.log({ createData, deleteData, updateData })

  const { mutate } = useCreateEpisode({ onSuccess: handleCreateSuccess })

  return (
    <main className="flex flex-col items-stretch gap-8 sm:gap-12">
      <Typography as="h1" className="text-left">
        Check your favourite episodes!
      </Typography>
      <section className="flex flex-col sm:flex-row justify-between sm:items-end gap-y-3">
        <Input
          label="Search episodes"
          isSearch
          placeholder="Epsiode title"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button onClick={openModal}>
          <PlusCircleOutlined className="mr-2" />
          Create new episode
        </Button>
      </section>
      <EpisodeList search={search} />
      <EpisodeModal onSubmitData={mutate} />
    </main>
  )
}
