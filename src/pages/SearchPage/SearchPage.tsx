import { Button, Input, Typography } from '@components'
import { EpisodeList } from './components'

export const SearchPage = () => {
  return (
    <main className="p-4 flex flex-col items-stretch gap-8 sm:gap-12">
      <Typography as="h1" className="text-left">
        Search for your favourite episodes
      </Typography>
      <section className="flex flex-col sm:flex-row justify-between sm:items-end gap-y-3">
        <Input label="Search" />
        <Button>+ Create new episode</Button>
      </section>
      <EpisodeList />
    </main>
  )
}
