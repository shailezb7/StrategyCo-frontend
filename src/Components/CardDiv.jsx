// CardDiv.jsx
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CardDiv = ({ e }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${e.poster_path}`;

    return (
        <Link to={`/movie/${e.id}`}>
            <Box bg={'rgb(255,67,66)'} p={'15px'} m={'10px'} textAlign={'center'} borderRadius={'10px'}>
                <Heading as='h2' size='lg' m={'10px 0'} color={'yellow'}>
                    {e.title}
                </Heading>
                <Image src={posterUrl} width={'200px'} height={'200px'} m={'10px auto'}></Image>
                <Text fontSize='xl' fontWeight={'bold'} m={'10px 0'} color={'yellow'}>
                    Rating : {e.vote_average}
                </Text>
                <Text fontSize='xl' fontWeight={'bold'} m={'10px 0'} color={'yellow'}>
                    Release Date : {e.release_date}
                </Text>
            </Box>
        </Link>
    );
};

export default CardDiv;
