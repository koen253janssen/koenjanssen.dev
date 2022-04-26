import * as React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';

export default class About extends React.Component {
    public render() {
        return (
            <Container>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>

                <Paragraph>
                    Currently I am pursuing my Bachelor's degree in Software
                    Engineering from Fontys University of Applied Sciences. I
                    love to code, thinker around with electronics and read. My
                    main interest revolves around Linux, Android Development,
                    Robotics and Machine Learning. I have done some Web
                    Development, Machine Learning and Linux Sysops in my free
                    time.
                </Paragraph>
            </Container>
        );
    }
}
