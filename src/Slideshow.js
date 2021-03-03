import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
// import "./Slideshow.css";
import { Container, ButtonNext, ButtonPrev, Items } from './Slideshow-style';

const Slideshow = ({ active, children, visible = 3 }) => {
    const [activeIndex, setActiveIndex] = useState(active);
    const imagesList = useMemo(() => children, [children]);

    const generate = () => {
        const items = [];
        let counter = Math.floor(visible / 2);
        console.log('counter', counter)
        for (let i = activeIndex - 1; i < activeIndex + 2; i++) {
            console.log('i', i)
            let index = i;
            if (i < 0) {
                index = imagesList.length + i;
            } else if (i >= imagesList.length) {
                index = i % imagesList.length;
            }
            console.log('index', index)
            items.push(
                // <div key={i} style={{ background: images[index] }}><span>{images[index]}</span></div>
                <motion.div key={index}
                    layoutId="slideId"
                    className={'item level' + counter}
                    positionTransition={{
                        damping: 50,
                        stiffness: 500
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ scale: counter === -1 || counter === 1 ? 0.7 : 1, opacity: 1, left: '10%' }}
                >
                    {imagesList[index]}
                </motion.div>
                // imagesList[index]
            )
            counter--;
        }
        return items;
    }

    const handleNext = () => {
        let newActive = activeIndex;
        setActiveIndex((newActive + 1) % imagesList.length)
    }

    const handlePrev = () => {
        let newActive = activeIndex;
        newActive--;
        setActiveIndex(newActive < 0 ? imagesList.length - 1 : newActive)
    }

    return (
        <>
            <Container>
                <ButtonPrev onClick={handlePrev}>
                    <span>Previus : {activeIndex}</span>
                </ButtonPrev>
                <Items >
                    <AnimatePresence>
                        {generate()}
                    </AnimatePresence>
                </Items>
                <ButtonNext onClick={handleNext}>
                    <span>Next</span>
                </ButtonNext>
            </Container>
        </>
    )
}

export default Slideshow;