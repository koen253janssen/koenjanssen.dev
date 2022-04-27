import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export interface IGridItemProps {
    children: React.ReactNode;
    id?: string;
    href?: string;
    title?: string;
    imgSrc: string;
}

export function GridItem({ children, href, title, imgSrc }: IGridItemProps) {
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={imgSrc}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>;
}

export function GridItemStyle() {
    <Global
        styles={`
            .grid-item-thumbnail {
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }
        `}
    />;
}
