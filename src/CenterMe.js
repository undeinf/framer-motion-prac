import React, { useState } from 'react';
import { motion, AnimatePresence, transform } from 'framer-motion';

// const variants = {
//     open: { opacity: 1, height: 'auto' },
//     closed: { opacity: 0, height: 0 }
// }


const CenterMe = ({ position, onEndAnim, newVariant }) => {

    console.log('props', position)


    const ended = (e) => {
        console.log('eee', e)
        onEndAnim(e)
    }
    return (
        <motion.div layoutId="outline" style={{
            width: position.width,
            height: position.height,
            background: 'red',
            position: 'relative',
        }}
            // initial={{ scale: 1 }}
            // animate={{ marginLeft: '50%', scale: 2 }}
            // transition={{ duration: 2 }}
            variants={newVariant}
            initial='initial'
            animate='animate'
            onAnimationComplete={ended}
        />
    )
}

export default CenterMe;