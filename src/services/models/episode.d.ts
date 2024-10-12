export interface Episode {
  id: string
  series: string
  title: string
  description: string
  seasonNumber: number
  episodeNumber: number
}

export interface EpisodeDetails extends Episode {
  releaseDate: string
  imdbId: string
}

export interface EpisodeDetailsAPIRepsonse {
  getEpisodeById: EpisodeDetails
}

export interface EpisodeList {
  listEpisodes: Episode[]
}

export interface EpisodeListParams {
  search?: string
}
