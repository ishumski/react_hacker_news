import {formatDistance} from 'date-fns'

export const dateConverter = (date: number) => `${formatDistance(new Date(),date * 1000,{includeSeconds: true})} ago`

