import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export interface ILinkItemProps {
    href: any;
    path: any;
    target?: any;
    children?: any;
    active?: any;
    inactiveColor?: any;
}

export function LinkItem(props: ILinkItemProps) {
    const active = props.path === props.href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <NextLink href={props.href} passHref>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={props.active ? '#202023' : inactiveColor}
                target={props.target}
                {...props}
            >
                {props.children}
            </Link>
        </NextLink>
    );
}
