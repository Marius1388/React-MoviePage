import { ProgramType } from '../types/types'
export const getData = async (programType?: ProgramType) => {
    const response = await fetch('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
    const data = await response.json()
    let result: any
    if (!programType) {
        result = data.entries
    } else {
        result = data.entries.filter(obj => {
            return obj.programType === programType
        })
    }
    return result
}
export const getHomePageResults = async () => {
    const response = await fetch('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
    const data = await response.json()
    const movie = data.entries.filter(obj =>
        obj.title.toLowerCase().includes('avengers')
    )[0]
    const series = data.entries.filter(obj =>
        obj.title.toLowerCase().includes('thrones')
    )[0]

    return [movie, series]
}
