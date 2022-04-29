import React, { startTransition } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from '../Components/Movie'

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_intro
            isLiked @client
        }
        suggestions(id: $id){
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
    width: 50%;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const SubTitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center center;
`;

export default () => {
    const { id } = useParams();
    const { loading, data} = useQuery(GET_MOVIE, {
        variables : { id : +id },
    });
    console.log(data);
    return (
        <Container>
            <Column>
                <Title >{loading ? "Loading..." : `${data.movie.title} ${data.movie.isLiked ? "❤️" : "💔"}`}</Title>
                    <SubTitle>
                        {data?.movie?.language} · {data?.movie?.rating}
                    </SubTitle>
                    <Description>{data?.movie?.description_intro}</Description>  
            </Column>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
            
        </Container>
    )
};
//{data.suggestions?.map(s => (
//                <Movie key={s.id} id={s.id} bg={s.medium_cover_image} />
//            ))}