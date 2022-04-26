import Head from 'next/head';
import Navbar from '../navbar.js';
import { Box, Container } from '@chakra-ui/react';
import Mountain from '../mountain.js';

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Koen's homepage" />
                <meta name="author" content="Koen Janssen" />
                <title>Koen Janssen - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.sm" pt={14}>
                <Mountain />
                {children}
            </Container>
        </Box>
    );
};

export default Main;
