import React, { useEffect, useState } from 'react';
import { Box, Heading, Input, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import CardDiv from './CardDiv';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

 // Debouncing
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const delayedSearch = debounce(async (query) => {
        let url = query ? `https://strategyco-backend.onrender.com/search?query=${query}` : 'https://strategyco-backend.onrender.com/allMovies';
        let data = await axios.get(url);
        console.log(data.data.msg.results);
        setMovies(data.data.msg.results);
    }, 2000);



    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        delayedSearch(value);
    };



    useEffect(() => {
        getMovies();
    }, [searchQuery]);



    const getMovies = async () => {
        let url = searchQuery ? `https://strategyco-backend.onrender.com/search?query=${searchQuery}` : 'https://strategyco-backend.onrender.com/allMovies';
        let data = await axios.get(url);
        console.log(data.data.msg.results);
        setMovies(data.data.msg.results);
    };

    return (
        <Box  >
            <Box bg={'rgb(246,163,1)'} position={'fixed'}
              textAlign={'center'} width={'100vw'} p={'10px'}>
             <Heading color={'red'}>Movie App</Heading>
            <Input
                placeholder='Search'  w={'30%'}  ml={'10px'} my={'10px'}
                onChange={handleSearchChange}
                color={'white'}
            />
            </Box><br /><br /><br /><br /><br /><br />

            <SimpleGrid columns={3} gap={'10px'} >
                {movies?.map((e, i) => (
                    <CardDiv e={e} key={i} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
