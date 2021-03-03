import React, { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const variants = {
    open:{opacity: 1, height: 'auto'},
    closed: {opacity: 0, height: 0}
  }
  
  
const Accordion = () => {

    const [toggle, setToggle] = useState(false)

    return(
        <article>
            <h2 role="button" onClick={() =>  setToggle(prev => !prev)}>
                The Heading
            </h2>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        variants={variants}
                        style={{overflow: 'hidden'}}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        >
                            <p>
                                Consequat eu dolor irure consequat proident irure commodo sit excepteur laborum incididunt. Magna exercitation magna aute esse aute officia in ad adipisicing irure deserunt quis adipisicing mollit. Ea consectetur voluptate mollit occaecat laboris. Irure ullamco aliqua pariatur in. Non irure laborum magna exercitation in aliqua consequat. Anim sint deserunt ea sunt incididunt aute consectetur eu velit. Voluptate ullamco anim qui ullamco labore sit.
                            </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    )
}

export default Accordion;