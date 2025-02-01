import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '../../App';
import './AppSectionStyle.css';
import { Spacer } from '../spacer/Spacer';

export function AppSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useParallax(scrollYProgress, 100);

  // const flexGap = useTransform(scrollYProgress, [0.2, 1], ['0em', '1em']);
  return (
    <motion.div className='apps' style={{ y }}>

      <span className='header' style={{}}>Mobile Apps</span>
      <Spacer height={2} />
      <div className='app-group'>
        <img
          className='app-icon'
          src='/parkaty_app_icon.svg' />
        <Spacer height={1} />
        <span className='app-description'>My project for university with an AWS CIC partnership</span>
      </div>
      <Spacer height={3} />
      <div className='app-group'>
        <img
          className='app-icon'
          src='/tfo_app_icon.svg' />
        <Spacer height={1} />
        <span className='app-description'>A project I worked on as a trainee in TFO during my last year of university</span>
      </div>
    </motion.div>
  );
}