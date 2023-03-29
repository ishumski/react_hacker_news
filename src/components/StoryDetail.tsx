import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import styled from "styled-components";
import {dateConverter} from "../core/utils/dateConverter";
import {TStory} from "../core/types/types";
import Spinner from "../core/components/Spinner";
import {getStoriesById} from "../queries/NewsQuery";
import {Typography} from "@mui/material";
import Comments from "./Comments";

const StoryDetailContainer = styled.div`
  padding: 10px 30px;
  margin-bottom: 20px;
  background: ${({theme}) => theme.colors.white};
  border-radius: 5px;  
`

const Title = styled.h1`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 2.125rem;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  color: ${({theme}) => theme.colors.black};
  margin: 16px 0;
`
const StoryLink = styled.a`
  margin: 0 0 16px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  color: ${({theme}) => theme.colors.blue100};
  cursor: pointer;
`

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const Info = styled.span`
  font-weight: bolder;
  margin-bottom: 10px;
`

const StoryDetail = () => {
    const [story, setStory] = useState<TStory>()
    const {id: storyId} = useParams()

    useEffect(() => {
        getStoriesById(storyId as any).then(response => setStory(response))
    }, [storyId]);

    if (!story) {
        return <Spinner/>
    }

    return (<>
            <StoryDetailContainer>
                <Title>{story?.title}</Title>
                <div>
                    Click {' '}
                    <StoryLink href={story?.url} target="_blank">here </StoryLink>
                    to read more...
                </div>
                <AdditionalInfo>
                    <div><Info>Date: </Info>{dateConverter(story?.time)}</div>
                    <div><Info>Author: </Info>{story?.by}</div>
                </AdditionalInfo>
            </StoryDetailContainer>
            <Typography variant="h6" color="grey" sx={{marginTop: '30px'}}>
                {!story?.kids
                    ? 'No comments yet'
                    : `Root comments (${story?.kids.length}):`
                }
            </Typography>
            {story?.kids?.map((id: any) => (
                <div key={id} style={{marginBottom: '16px'}}>
                    <Comments id={id}/>
                </div>
            ))}
        </>
    )
};

export default StoryDetail;