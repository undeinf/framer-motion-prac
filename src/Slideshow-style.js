import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    
`

export const ButtonPrev = styled.div`
    padding-right: 10px;
`
export const ButtonNext = styled.div`
    padding-left: 10px;
`

export const Items = styled(motion.div)`
    display: flex;
    align-items: center;
    overflow: hidden;
    // transition: height 1s, width 1s, left 1s;
    
    // .level-1, .level1{
    //     transform: scale(0.7)
    // }
`