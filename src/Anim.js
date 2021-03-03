import React, { useRef, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import Nav from "./Nav";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Model from './Modal';
import Accordion from "./Accordion";
import Slideshow from "./Slideshow";
import { Box } from "./Anim-style";
import { Link } from "react-router-dom";
import CenterMe from "./CenterMe";


// anim varient

const animVariant = {
    initial: { scale: 1 },
    animate: { marginLeft: '50%', scale: 2, transition: { duration: 2 } },
}

const endVariant = {
    initial: { scale: 1 },
    animate: { scale: 2 },

}

function Anim() {
    const [value, setValue] = useState(0)
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const boxRef = useRef();

    const [showAnim, setShowAnim] = useState('enter');
    const [props, setProps] = useState();

    const handleRoute = (e) => {
        console.log('e', boxRef.current.getBoundingClientRect())
        // props = boxRef.current.getBoundingClientRect()
        setProps(boxRef.current.getBoundingClientRect())
        setShowAnim('anim');
    }

    let newProps = {};

    const onEndAnim = (e) => {
        console.log('exxx', e);
        setProps(props => {
            return { ...props, ...e }
        });
        setShowAnim('end')
    }
    return (
        <motion.div exit={{ opacity: 0 }}>
            <div>
                <Slideshow active={2}>
                    <div style={{ width: '100px', height: '100px', background: 'red' }}>Red</div>
                    <div style={{ width: '100px', height: '100px', background: 'blue' }}>Blue</div>
                    <div style={{ width: '100px', height: '100px', background: 'green' }}>Green</div>
                    <div style={{ width: '100px', height: '100px', background: 'yellow' }}>Yellow</div>
                    <div style={{ width: '100px', height: '100px', background: 'pink' }}>Pink</div>
                </Slideshow>
            </div>

            <div style={{ display: 'flex', padding: '5px' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    {showAnim}
                    {JSON.stringify(props)}
                    <AnimateSharedLayout>
                        {showAnim === 'enter' && (
                            <Box innerColor="red" ref={boxRef} layoutId="outline" onClick={handleRoute}></Box>)}
                        {showAnim === 'anim' && <CenterMe position={props} newVariant={animVariant} onEndAnim={onEndAnim} />}
                        {/* <Link to='center-me'><Box innerColor="red" ref={boxRef}
                    animate={{ position: 'absolute', margin: 'auto 0' }} onClick={handleRoute}></Box></Link> */}
                        {/* <Box innerColor="blue"></Box> */}
                        {showAnim === 'end' && <CenterMe position={props} newVariant={endVariant} onEndAnim={console.log} />}
                    </AnimateSharedLayout>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                <Header>
                    <Menu onClick={() => setIsNavOpen(true)} />
                    <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                    <h1>Header</h1>
                </Header>
                <Container>
                    <AnimatePresence>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: value * 2.5 + 'px' }}
                            exit={{ opacity: 0 }}>Super Cool </motion.h2>
                    </AnimatePresence>
                    <input type="range" min="-100" max="100" value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button onClick={() => setToggle(true)}>Toggle: {toggle.toString()}</button>

                    <Model isToggle={toggle} setToggle={setToggle}>
                        <Card style={{ background: "var(--purp)" }}>
                            <h3>Some card</h3>
                            <img src={purp} />
                        </Card>
                    </Model>

                    <Accordion />
                    <CardGrid>
                        <Card
                            whileHover={{ scale: [1.02, 0.8, 1.2] }}
                            whileTap={{ background: 'var(--red)' }}
                            onHoverEnd={() => console.log('hover end')}
                            style={{ background: "var(--purp)" }}>
                            <h3>Some card</h3>
                            <img src={purp} />
                        </Card>
                        <Card style={{ background: "var(--blue)" }}>
                            <h3>Some card</h3>
                            <img src={blue} />
                        </Card>
                        <Card style={{ background: "var(--black)" }}>
                            <h3>Some card</h3>
                            <img src={black} />
                        </Card>
                        <Card style={{ background: "var(--green)" }}>
                            <h3>Some card</h3>
                            <img src={green} />
                        </Card>
                    </CardGrid>
                </Container>
            </motion.div >
        </motion.div>
    );
}

export default Anim;
