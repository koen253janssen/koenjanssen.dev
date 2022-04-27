import { Box, Divider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import Paragraph from './paragraph';

interface IExperienceProps {
    title: string;
    imgSrc: string;
    companyName: string;
    jobType: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

export const ExperienceItem = (props: IExperienceProps) => {
    return (
        <Box style={{ padding: '12px' }}>
            <HStack
                spacing="24px"
                align="flex-start"
                alignItems="flex-start"
                verticalAlign="top"
            >
                <Image
                    borderRadius="15px"
                    boxSize="56px"
                    src={props.imgSrc}
                    title={props.companyName}
                    alt={props.companyName}
                />
                <Box>
                    <b>{props.title}</b>
                    <p>{props.jobType}</p>
                    <p>{props.companyName}</p>
                    <p>{props.location}</p>
                    <p>
                        {props.startDate} - {props.endDate}
                    </p>
                    <br />
                    <Divider />
                    <br />
                    <Paragraph>{props.description}</Paragraph>
                </Box>
            </HStack>
        </Box>
    );
};
