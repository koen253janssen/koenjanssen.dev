import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/Main';
import Fonts from '../components/Fonts';
import Theme from '../lib/theme';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={Theme}>
            <Fonts />

            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    );
};

export default Website;
