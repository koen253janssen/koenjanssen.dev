import * as React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';

export default class Portfolio extends React.Component {
    public render() {
        return (
            <Container maxW="container.lg">
                {' '}
                <Heading as="h3" fontSize={20} mb={4}>
                    Portfolio
                </Heading>
                <Paragraph>Coming soon...</Paragraph>
            </Container>
        );
    }
}
