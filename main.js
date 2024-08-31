import './style.css'
import { startBootSequence, initializeDesktop, updateClock } from './desktop.js'


document.addEventListener('DOMContentLoaded', () => {
    startBootSequence(0);
    initializeDesktop();
    setInterval(updateClock, 1000);
    updateClock();
});


