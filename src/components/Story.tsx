import {FC} from "react";
import styled from "styled-components";
import {dateConverter} from "../core/utils/dateConverter";
import {useNavigate} from "react-router";
import VerticalLine from "../core/components/VerticalLine";

const StoryContainer = styled.div`
  padding: 10px 25px;
  margin-bottom: 5px;
  border-radius: 12px;
  border: solid 1px ${({theme}) => theme.colors.grey};
  background: ${({theme}) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Additionaldiv = styled.div`
  display: flex;
  align-items: baseline;
`

type TProps = {
    id: number,
    title: string,
    rating: string | number,
    author: string,
    time: any
}

const Story: FC<TProps> = ({
        id,
        title,
        rating,
        author,
        time
    }) => {
    const navigate = useNavigate()

    return (
        <StoryContainer onClick={() => navigate(`${id}`)}>
            <Title>{title}</Title>
            <Additionaldiv>
                <div>{rating} points</div>
                <VerticalLine/>
                <div>created by {author}</div>
                <VerticalLine/>
                <div>{dateConverter(time)}</div>
            </Additionaldiv>
        </StoryContainer>
    );
};

export default Story;