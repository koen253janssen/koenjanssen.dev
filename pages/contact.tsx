import * as React from 'react';
import { Container, Heading, Flex } from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';
import Paragraph from '../components/paragraph';
import { NextRouter, withRouter } from 'next/router';

interface WithRouterProps {
    router: NextRouter;
}

interface ContactProps extends WithRouterProps {}

class Contact extends React.Component<ContactProps> {
    public render() {
        return (
            <Container maxW="container.lg">
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                <Paragraph>
                    Feel free to reach out to me via E-mail or Whatsapp.
                </Paragraph>
                <br />
                <Flex>
                    <Stack direction={['column', 'row']} spacing={4}>
                        <Button
                            leftIcon={<EmailIcon />}
                            colorScheme="teal"
                            variant="solid"
                            onClick={() =>
                                this.props.router.push(
                                    'mailto:mail@koenjanssen.dev'
                                )
                            }
                        >
                            Email
                        </Button>
                        <Button
                            colorScheme="whatsapp"
                            leftIcon={<FaWhatsapp />}
                            onClick={() =>
                                this.props.router.push(
                                    'https://wa.me/31626167832'
                                )
                            }
                        >
                            Whatsapp
                        </Button>
                    </Stack>
                </Flex>
            </Container>
        );
    }
}

export default withRouter(Contact);
