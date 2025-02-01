import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParallaxFlipped } from '../../App';
import './IntroSectionStyle.css';

export function IntroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallaxFlipped(scrollYProgress, 80);
  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 10 });
  const x = useTransform(spring, [0.25, 0.6], ['0%', '100%']);

  return (
    <motion.div className='intro' style={{ y }}>
      <span className='header'>Ahmed Sarhan</span>
      <motion.div className='divider' style={{ marginBlock: '1em', width: x }} />
      <span className='header'>Front End Developer</span>
    </motion.div>
  );
}
