export type TStory = {
    by: string
    descendants: number
    id: number
    score: number
    time: number
    title: string
    type: string
    url: string
    kids?: string[]
}

export type TComment = {
    id: number;
    by: string;
    text: string;
    time: number;
    kids?: number[];
}
