import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IGridItemProps } from './GridItem';

interface IPortfolioGridItemProps extends IGridItemProps {
    imgSrc: string;
    title: string;
    jobType: string;
    companyName: string;
    startDate: string;
    endDate: string;
}
export function PortfolioGridItem({
    children,
    id,
    title,
    imgSrc,
}: IPortfolioGridItemProps) {
    return (
        <Box w="100%" align="center">
            <LinkBox cursor="pointer">
                <Image
                    src={imgSrc}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={`/portfolio/${id}`}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    );
}
