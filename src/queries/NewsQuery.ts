import {apiClient} from "../core/api/apiClient";
import {NEWS_LIMIT} from "../core/const/const";
import {TComment, TStory} from "../core/types/types";

export const getNewStories = async (): Promise<TStory[]> => {
    try {
        const {data} = await apiClient(`/newstories.json`)
        const promises = data
            .slice(0, NEWS_LIMIT)
            .map((id: number) =>
                apiClient(`/item/${id}.json`)
                    .then(response => response.data)
            )
        return await Promise.all(promises)
    } catch (err: any) {
        throw new Error(`${err.message}`)
    }
}

export const getStoriesById = async (id: number | string): Promise<TStory> => {
    try {
        const {data} = await apiClient(`/item/${id}.json`)
        return data
    } catch (err: any) {
        throw new Error(`${err.message}`)
    }
}

export const getCommentById = async (commentId: number | string): Promise<TComment> => {
    try {
        const {data} = await apiClient(`/item/${commentId}.json`)
        return data
    } catch (err: any) {
        throw new Error(`${err.message}`)
    }
}

export const getNestedComments = async (commentsId: (number | string)[]): Promise<TComment[]> => {
    try {
        return await Promise.all(commentsId.map((id: number | string) => getCommentById(id)))
    } catch (err: any) {
        throw new Error(`${err.message}`)
    }
}