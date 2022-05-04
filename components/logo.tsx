import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Emoji from './emoji';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
`;

const EmojiBox = styled.span`
    padding: 15px;
    &:hover {
        transform: rotate(-50deg);
    }
`;

export default function Logo() {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <EmojiBox>
                        <Emoji symbol="🚀" label="rocket" />
                    </EmojiBox>

                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight="bold"
                        ml={3}
                    >
                        Koen Janssen
                    </Text>
                </LogoBox>
            </a>
        </Link>
    );
}
