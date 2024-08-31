import './style.css'
import { startBootSequence, initializeDesktop, updateClock } from './components/desktop'


document.addEventListener('DOMContentLoaded', () => {
    startBootSequence(0);
    initializeDesktop();
    setInterval(updateClock, 1000);
    updateClock();
});


