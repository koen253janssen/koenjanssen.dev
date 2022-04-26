import * as React from 'react';

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

export default class Posts extends React.Component {
    public render() {
        return (
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Posts
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}></SimpleGrid>
            </Container>
        );
    }
}
