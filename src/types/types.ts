export enum ProgramType {
    movies = 'movies',
    series = 'series'
}

interface PosterArt {
    url: string
    width: number
    height: number
}

interface imgs {
    posterArt: PosterArt
}

export interface DigitalContent {
    title: string
    description: string
    programType: ProgramType
    images: imgs
    releaseYear: number
}

export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
