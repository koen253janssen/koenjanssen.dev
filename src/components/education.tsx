import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

interface IEducationItemProps {
    imgSrc: string;
    institute: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
}

export function EducationItem(props: IEducationItemProps) {
    return (
        <Box style={{ padding: '12px' }}>
            <HStack spacing="24px">
                <Image
                    borderRadius="15px"
                    boxSize="56px"
                    src={props.imgSrc}
                    title={props.institute}
                    alt={props.institute}
                />
                <Box>
                    <b>{props.institute}</b>
                    <p>
                        {props.degree}, {props.fieldOfStudy}
                    </p>
                    <p>
                        {props.startDate} - {props.endDate}
                    </p>
                </Box>
            </HStack>
        </Box>
    );
}
