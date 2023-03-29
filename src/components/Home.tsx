import React, {useContext} from 'react';
import {HomeContext} from "../context/HomeContext";
import Story from "./Story";
import Spinner from "../core/components/Spinner";
import Header from "./Header";
import {TStory} from "../core/types/types";

const Home = () => {
    const {stories, isLoading} = useContext(HomeContext)

    return (<>
            <Header/>
            {isLoading
                ? <Spinner/>
                : stories && stories.map((item: TStory) => {
                return <Story
                    key={item?.id}
                    id={item?.id}
                    title={item?.title}
                    rating={item?.score}
                    time={item?.time}
                    author={item?.by}
                />
            })}
        </>
    );
}

export default Home;
