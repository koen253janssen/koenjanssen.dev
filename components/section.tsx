import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition';
    },
});

interface ISectionProps {
    children: React.ReactNode;
    delay?: any;
}

export default function Section({ children, delay = 0 }: ISectionProps) {
    return (
        <StyledDiv
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={({ duration: 0.8 } as any, delay)}
            mb={6}
        >
            {children}
        </StyledDiv>
    );
}
