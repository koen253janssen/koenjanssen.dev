import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { IGridItemProps } from './GridItem';

export function PortfolioGridItem({
    children,
    id,
    title,
    thumbnail,
}: IGridItemProps) {
    return (
        <Box w="100%" align="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
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
