import { MotionValue, useTransform } from 'framer-motion';
import './App.css';
import { AppSection } from './components/app_section/AppSection';
import { IntroSection } from './components/intro_section/IntroSection';
import { Spacer } from './components/spacer/Spacer';
import { Footer } from './components/footer/Footer';

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export function useParallaxFlipped(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div id='main-image' />
      <IntroSection />
      <AppSection />
      <Spacer height={0} />
      <Footer />
    </div>
  )
}

export default App
