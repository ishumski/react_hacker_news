import React, {useState, useEffect, useCallback} from 'react';
import {Paper, Skeleton, Typography, Box} from '@mui/material';
import styled from "styled-components";
import {getCommentById, getNestedComments} from '../queries/NewsQuery';
import {dateConverter} from "../core/utils/dateConverter";
import CustomButton from "../core/components/CustomButton";
import {TComment} from "../core/types/types";

const StoryDetailContainer = styled.div`
  && {
    .MuiPaper-root {
      padding: 25px;
      box-shadow: none;
      border: 1px solid ${({theme}) => theme.colors.grey};
    }
  }
`

const ReplyButton = styled(CustomButton)`
  && {
    margin: 10px 0;
    border: 1px solid ${({theme}) => theme.colors.blue100};
  }
`

type TProps = {
    id: number;
}

const Comments: React.FC<TProps> = ({id}) => {
    const [comment, setComment] = useState<TComment | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [replies, setReplies] = useState<TComment[]>([]);
    const [hideReplies, setHideReplies] = useState<boolean>(true);

    const fetchComment = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getCommentById(id);
            setComment(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const fetchReplies = useCallback(async () => {
        if (!comment || !comment.kids) {
            return;
        }
        try {
            const data = await getNestedComments(comment.kids);
            setReplies(data);
        } catch (error) {
            console.log(error);
        }
    }, [comment]);

    useEffect(() => {
        fetchReplies();
    }, [fetchReplies]);

    useEffect(() => {
        fetchComment();
    }, [fetchComment]);

    const toggleReplies = () => {
        setHideReplies(!hideReplies);
    };

    // eslint-disable-next-line no-shadow
    const renderComment = (comment: TComment) => {
        const hasReplies = comment?.kids;
        return (
            <StoryDetailContainer>
                <Paper>
                    <Typography variant="h6">
                        Author:{' '}{comment.by}
                    </Typography>
                    <Typography variant="subtitle2">
                        Date:{' '}{dateConverter(comment.time)}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: comment.text}}/>
                    {
                        hasReplies && (
                            <>
                                <ReplyButton
                                    text={hideReplies ? 'Show replies' : 'Hide replies'}
                                    onClick={toggleReplies}
                                />
                                {!hideReplies && replies.map((reply) => <Comments key={reply.id} id={reply.id}/>)}
                            </>
                        )}
                </Paper>
            </StoryDetailContainer>
        );
    };

    if (loading) {
        return (
            <Box sx={{pt: 0.5}}>
                <Skeleton width="200px"/>
                <Skeleton width="200px"/>
                <Skeleton variant="rectangular" width="60%" height={118}/>
            </Box>
        );
    }

    if (!comment) {
        return null;
    }

    return renderComment(comment);
};

export default Comments;