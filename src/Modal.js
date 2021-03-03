import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const varients = {
    open: {height: '100%', width: '100%', opacity: 0.5},
    closed: {height: 0, width: 0, opacity: 0}
}

const Model = ({isToggle, setToggle, children}) => {

    return(
        <AnimatePresence>
            <motion.div
                variants={varients}
            >
            {isToggle && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{
                        position: "fixed",
                        top: "30px",
                        left: "50%",
                        transform:"translate3d(-50%, 0, 0)"
                    }}>
                    <motion.div 
                        initial={{y: 50}}
                        animate={{y: 0}}
                        exit={{y: 30}}>
                        <button onClick={() => setToggle(false)}>Close</button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
            </motion.div>
        </AnimatePresence>
    )
}

export default Model;