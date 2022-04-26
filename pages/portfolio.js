import { Container, Heading } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';

const Portfolio = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Portfolio
            </Heading>

            <Paragraph>Coming soon...</Paragraph>
        </Container>
    );
};

export default Portfolio;
