import React, {createContext, FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {TStory} from "../core/types/types";
import {getNewStories} from "../queries/NewsQuery";

type TNewsContext = {
    stories: TStory[],
    fetchStories: () => Promise<void>,
    isLoading: boolean
}
type TProps = {
    children: ReactNode | ReactNode[]
}

export const HomeContext = createContext<TNewsContext>({
    stories: [],
    fetchStories: async () => {},
    isLoading: false
})


export const HomeProvider: FC<TProps> = ({children}) => {
    const [stories, setStories] = useState<TStory[] | any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchStories = async () => {
        setIsLoading(true)
        const data = await getNewStories()
        setStories(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchStories();
    }, [])

    const contextValue = useMemo(()=>(
        {stories, fetchStories, isLoading}
    ),[stories, fetchStories, isLoading])



    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    );
};



