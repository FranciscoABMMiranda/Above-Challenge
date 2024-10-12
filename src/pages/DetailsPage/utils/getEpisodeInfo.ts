import { EpisodeDetails, ImdbDetails } from '@services'

export const getEpisodeInfo = (
  episodeDetails?: EpisodeDetails,
  imdbDetails?: ImdbDetails,
) => [
  {
    label: 'Season',
    value: episodeDetails?.seasonNumber,
  },
  {
    label: 'Episode',
    value: episodeDetails?.episodeNumber,
  },
  {
    label: 'Release date',
    value: episodeDetails?.releaseDate,
  },
  {
    label: 'Director',
    value: imdbDetails?.Director,
  },
  {
    label: 'Writer',
    value: imdbDetails?.Writer,
  },
  {
    label: 'Actors',
    value: imdbDetails?.Actors,
  },
  {
    label: 'Duration',
    value: imdbDetails?.Runtime,
  },
]
