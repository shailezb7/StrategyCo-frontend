// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get(`https://strategyco-backend.onrender.com/movieData/${id}`);
      setMovie(response.data.msg);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Container maxW={'800px'} bg="crimson" color="white" p="4" borderRadius="md" textAlign="center">
  
      <Heading fontSize="4xl" color="yellow" mb="2" fontWeight="bold">
        {movie.title}
      </Heading>
      
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
       m={'auto'} my="4" borderRadius={'10px'}/>



      <Text fontSize="lg" color="yellow" fontWeight="bold" mb="2">
        Genre: {movie.genres?.map((genre) => genre.name).join(', ')}
      </Text>

      <Text fontSize="lg" color="green" fontWeight="bold" mb="2">
        Release Date: {movie.release_date}
      </Text>

      <Text fontSize="lg" color="yellow" fontWeight="bold" mb="2">
        Rating: {movie.vote_average}
      </Text>

      
      <Text fontSize="lg" color="green" fontWeight="bold" mb="2">
        Revenue: ${movie.revenue}
      </Text>

      
      <Text fontSize="lg" color="yellow" fontWeight="bold" mb="2">
        Runtime: {movie.runtime} minutes
      </Text>

      
      <Text fontSize="lg" color="green" fontWeight="bold" mb="2">
        Budget: ${movie.budget}
      </Text>
      
     

     
      <Text fontSize="lg" color="yellow" fontWeight="bold">
        Overview: {movie.overview}
      </Text>
    </Container>
  );
};

export default MovieDetails;
