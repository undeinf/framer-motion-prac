import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Box = styled(motion.div)`
    width: 100px;
    height: 100px;
    background: ${props => props.innerColor ? props.innerColor : 'cyan'};
    padding: 5px;
`