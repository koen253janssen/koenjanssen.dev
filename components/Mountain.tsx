import { Container } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HeaderBox = styled.span`
    padding: 15px;
    align-items: center;
    align-content: center;
`;

export default function Mountain() {
    return (
        <HeaderBox>
            <Container maxW="container.lg">
                <div
                    style={{
                        borderRadius: '15px',
                        height: '400px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        backgroundImage: "url('./images/header.png')",
                    }}
                ></div>
            </Container>
        </HeaderBox>
    );
}
