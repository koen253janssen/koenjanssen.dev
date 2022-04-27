import * as React from 'react';
import {
    Container,
    Box,
    Heading,
    Image,
    Divider,
    Stack,
    Button,
    Flex,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { EducationItem } from '../components/education';
import { ExperienceItem } from '../components/experience';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NextRouter, withRouter } from 'next/router';

interface WithRouterProps {
    router: NextRouter;
}

interface PageProps extends WithRouterProps {}

class Page extends React.Component<PageProps> {
    public render() {
        return (
            <Container maxW="container.lg">
                <Box
                    borderRadius="lg"
                    bg="grey"
                    p={3}
                    mb={6}
                    alignContent="center"
                >
                    Hello, I&apos;m a software engineering student based in the
                    Netherlands!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 0 }}
                        alignContent="center"
                    >
                        <Image
                            maxWidth="96px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/koen.jpg"
                            alt="Avatar"
                        />
                    </Box>
                    <Box flexGrow={1} ml={{ md: 6 }}>
                        <Heading as="h2" variant="page-title">
                            Koen Janssen
                        </Heading>
                        <p>
                            Honor student (Delta) | Fontys University of Applied
                            Science
                        </p>
                        <p>Eindhoven, Noord-Brabant, Nederland</p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Paragraph>
                        Currently I am pursuing my Bachelor's degree in Software
                        Engineering from Fontys University of Applied Sciences.
                        I love to code, thinker around with electronics and
                        read. My main interest revolves around Linux, Android
                        Development, Robotics and Machine Learning. I have done
                        some Web Development, Machine Learning and Linux Sysops
                        in my free time.
                    </Paragraph>
                    <Flex>
                        <Box alignContent="center" my={4}>
                            <Stack direction={['column', 'row']} spacing={4}>
                                <Button
                                    leftIcon={<EmailIcon />}
                                    colorScheme="teal"
                                    variant="solid"
                                    onClick={() =>
                                        this.props.router.push(
                                            'mailto:mail@koenjanssen.xyz'
                                        )
                                    }
                                >
                                    Email
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    variant="ghost"
                                    leftIcon={<FaGithub />}
                                    onClick={() =>
                                        this.props.router.push(
                                            'https://github.com/koenjanssenxyz'
                                        )
                                    }
                                >
                                    Github
                                </Button>
                                <Button
                                    colorScheme="linkedin"
                                    leftIcon={<FaLinkedin />}
                                    onClick={() =>
                                        this.props.router.push(
                                            'https://www.linkedin.com/in/koenjanssenxyz/'
                                        )
                                    }
                                >
                                    LinkedIn
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
                        </Box>
                    </Flex>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Education
                    </Heading>
                    <EducationItem
                        imgSrc="./images/education/fontys.png"
                        institute="Fontys University of Applied Science"
                        degree="Bachelor's degree"
                        fieldOfStudy="Software Engineering"
                        startDate="2020"
                        endDate="2024"
                    />
                    <Divider />
                    <EducationItem
                        imgSrc="./images/education/vistacollege.png"
                        institute="Vistacollege"
                        degree="MBO4"
                        fieldOfStudy="Network Engineering"
                        startDate="2018"
                        endDate="2020"
                    />
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
                    <ExperienceItem
                        imgSrc="./images/experience/delta.png"
                        title="Delta Member"
                        jobType="Fulltime"
                        companyName="Fontys Hogeschool ICT"
                        location="Eindhoven, Noord-Brabant, Nederland"
                        startDate="sep. 2021"
                        endDate="present"
                        description="
              The FHICT Delta programme is an excellence program. 
              We primarily work with other companies to prepare us for a professional working environment.
            "
                    />
                    <Divider />

                    <ExperienceItem
                        imgSrc="./images/experience/true.png"
                        title="IT-stagiair"
                        jobType="Fulltime"
                        companyName="True B.V."
                        startDate="feb. 2020"
                        endDate="aug. 2020"
                    />
                    <Divider />

                    <ExperienceItem
                        imgSrc="./images/experience/hornbach.png"
                        title="Verkoopmedewerker"
                        jobType="Parttime"
                        companyName="HORNBACH Nederland"
                        startDate="mei. 2017"
                        endDate="dec. 2019"
                    />
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        Reading, Webdevelopment, Network Engineering, Machine
                        Learning
                    </Paragraph>
                </Section>
            </Container>
        );
    }
}

export default withRouter(Page);
