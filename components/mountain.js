import styled from '@emotion/styled';

const HeaderBox = styled.span`
    padding: 15px;
`;

const Mountain = () => {
    return (
        <HeaderBox>
            <div
                style={{
                    borderRadius: '15px',
                    height: '300px',
                    width: '100%',
                    backgroundPosition: 'top',
                    backgroundImage: "url('./images/header.png')",
                }}
            ></div>
        </HeaderBox>
    );
};

export default Mountain;
