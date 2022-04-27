import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import Theme from '../lib/Theme';

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
