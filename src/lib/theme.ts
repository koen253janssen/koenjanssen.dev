import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
// @ts-nocheck


const Styles = {
    global: (props) => ({
        body: {
            bg: mode('f027db', '#202023')(props),
        },
    }),
};

const Components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Link: {
        baseStyle: (props) => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
        }),
    },
};

const Fonts = {
    heading: "'Space Mono'",
};

const Colors = {
    glassTeal: '#88ccca',
};

const Config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const Theme = extendTheme({
    config: Config,
    styles: Styles,
    components: Components,
    colors: Colors,
    fonts: Fonts,
});

export default Theme;
