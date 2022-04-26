import { Container, Heading, Flex } from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Paragraph from '../components/paragraph';

const Contact = () => {
    const router = useRouter();
    return (
        <Container>
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
                            router.push('mailto:mail@koenjanssen.xyz')
                        }
                    >
                        Email
                    </Button>
                    <Button
                        colorScheme="whatsapp"
                        leftIcon={<FaWhatsapp />}
                        onClick={() => router.push('https://wa.me/31626167832')}
                    >
                        Whatsapp
                    </Button>
                </Stack>
            </Flex>
        </Container>
    );
};

export default Contact;
