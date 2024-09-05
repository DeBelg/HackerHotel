const bootScreen = document.getElementById('boot-screen');
const bootMessages = [

    "ooooo...ooooo.....................oooo...........................ooooo...ooooo.............................oooo.<br>",
    "888.....888.......................888............................888.....888...............o8..............888.<br>",
    "888.....888....oooo......ooooo....888..oooo....ooooo...oooo.d8b..888.....888....ooooo....o888oo...ooooo....888.<br>",
    "888ooooo888..P..)88b..d88...Y8b...888..8P....d88...88b..8888P....888ooooo888..d88...88b...888...d88...88b..888.<br>",
    "888.....888...oP.888..888.........888888.....888ooo888..888......888.....888..888...888...888...888ooo888..888.<br>",
    "888.....888.d8(..888..888....o8...888..88b...888.....o..888......888.....888..888...888...888...888.....o..888.<br>",
    "o888o..o888o.Y888888o..Y8bod8P..o888o.o888o...Y8bod8P..d888b....o888o...o888o..Y8bod8P....888...Y8bod8P..o888o.<br>",
    "<br>",
    "<br>",
    ".o88b..db...db.d88888b...o88b..db...dD.d888888b.d8b...db..d888b........88b..d88..d88888b..88b..d88....d88b...d8888b..db....db.<br>",
    "d8P..Y8.88...88.88......d8P..Y8.88.,8P.....88....888o..88.88..Y8b......88.YbdP.88.88......88.YbdP.88..8P..Y8..88...8D..8b..d8..<br>",
    "8P......88ooo88.88ooooo.8P......88,8P......88....88V8o.88.88...........88..88..88.88ooooo.88..88..88.88....88.88oobY....8bd8...<br>",
    "8b......88~~~88.88~~~~~.8b......88.8b......88....88.V8o88.88..ooo......88..88..88.88~~~~~.88..88..88.88....88.88.8b......88....<br>",
    "Y8b..d8.88...88.88......Y8b..d8.88..88.....88....88..V888.88..~8~......88..88..88.88......88..88..88..8b..d8..88..88.....88....<br>",
    "..Y88P..YP...YP.Y88888P...Y88P..YP...YD.Y888888P.VP...V8P..Y888P.......YP..YP..YP.Y88888P.YP..YP..YP...Y88P...88...YD....YP...<br>",
    "<br>",
    "<br>",
    ".d888888b..88b..d88..d8888b....d88b...d8888b..d888888b.d888888b.d8b...db..d888b........d8888..db......d88888b.d88888b.d8888b..<br>",
    "...88....88.YbdP.88.88...8D..8P..Y8..88...8D..~~88~~.....88....888o..88.88..Y8b......88...YP.88......88......88......88...8D.<br>",
    "...88....88..88..88.88oodD..88....88.88oobY.....88.......88....88V8o.88.88............8bo....88......88ooooo.88ooooo.88oodD..<br>",
    "...88....88..88..88.88~~~...88....88.88.8b......88.......88....88.V8o88.88..ooo.........Y8b..88......88~~~~~.88~~~~~.88~~~...<br>",
    "...88....88..88..88.88.......8b..d8..88..88.....88.......88....88..V888.88..~8~......db...8D.88booo..88......88......88......<br>",
    "Y888888P.YP..YP..YP.88........Y88P...88...YD....YP....Y888888P.VP...V8P..Y888P........8888Y..Y88888P.Y88888P.Y88888P.88......<br>",
    "<br>",
    "<br>",
    "d8888b..d88888b.d8b...db.d8888b..d88888b.d8888b..d888888b.d8b...db..d888b..........d88b...d8b.....o88b..db....db.d88888D.d88888D.d888888b.<br>",
    "88...8D.88......888o..88.88...8D.88......88...8D....88....888o..88.88..Y8b..........8P..d8...8b.d8P..Y8.88....88.YP..d8..YP..d8.....88....<br>",
    "88oobY..88ooooo.88V8o.88.88...88.88ooooo.88oobY.....88....88V8o.88.88...............88..88ooo88.8P......88....88....d8......d8......88....<br>",
    "88.8b...88~~~~~.88.V8o88.88...88.88~~~~~.88.8b......88....88.V8o88.88..ooo..........88..88~~~88.8b......88....88...d8......d8.......88....<br>",
    "88..88..88......88..V888.88...8D.88......88..88.....88....88..V888.88..~8~......db..88..88...88.Y8b..d8.88b..d88..d8..db..d8..db....88....<br>",
    "88...YD.Y88888P.VP...V8P.Y8888D..Y88888P.88...YD.Y888888P.VP...V8P..Y888P.......Y8888P..YP...YP...Y88P..~Y8888P..d88888P.d88888P.Y888888P.<br>",
    "<br>",
    "<br>",
    ".d8888..d888888b...d8b...d8888b..d888888b.d888888b.d8b...db..d888b........d8888..d88888b.d8888b..db....db.d888888b...o88b..d88888b..d8888..<br>",
    "88...YP..~~88~~..d8...8b.88...8D..~~88~~.....88....888o..88.88..Y8b......88...YP.88......88...8D.88....88....88....d8P..Y8.88......88...YP.<br>",
    ".8bo.......88....88ooo88.88oobY.....88.......88....88V8o.88.88............8bo....88ooooo.88oobY..Y8....8P....88....8P......88ooooo..8bo....<br>",
    "...Y8b.....88....88~~~88.88.8b......88.......88....88.V8o88.88..ooo.........Y8b..88~~~~~.88.8b....8b..d8.....88....8b......88~~~~~....Y8b..<br>",
    "db...8D....88....88...88.88..88.....88.......88....88..V888.88..~8~......db...8D.88......88..88....8bd8......88....Y8b..d8.88......db...8D.<br>",
    ".8888Y.....YP....YP...YP.88...YD....YP....Y888888P.VP...V8P..Y888P........8888Y..Y88888P.88...YD....YP....Y888888P...Y88P..Y88888P..8888Y..<br>",
    "<br>",
    "<br>",
    "d8888b....d88b.....d88b...d888888b.db........d88b.....d8b...d8888b..d88888b.d8888b.........o88b....d88b....88b..d88..d8888b..db......d88888b.d888888b.d88888b.<br>",
    "88...8D..8P..Y8...8P..Y8...~~88~~..88.......8P..Y8..d8...8b.88...8D.88......88...8D......d8P..Y8..8P..Y8..88.YbdP.88.88...8D.88......88.......~~88~~..88......<br>",
    "88oooY..88....88.88....88....88....88......88....88.88ooo88.88...88.88ooooo.88oobY.......8P......88....88.88..88..88.88oodD..88......88ooooo....88....88ooooo.<br>",
    "88~~~b..88....88.88....88....88....88......88....88.88~~~88.88...88.88~~~~~.88.8b........8b......88....88.88..88..88.88~~~...88......88~~~~~....88....88~~~~~.<br>",
    "88...8D..8b..d8...8b..d8.....88....88booo...8b..d8..88...88.88...8D.88......88..88.......Y8b..d8..8b..d8..88..88..88.88......88booo..88.........88....88......<br>",
    "Y8888P....Y88P.....Y88P......YP....Y88888P...Y88P...YP...YP.Y8888D..Y88888P.88...YD........Y88P....Y88P...YP..YP..YP.88......Y88888P.Y88888P....YP....Y88888P.<br>",
    "<br>",
    "<br>",
    "db...d8b...db.d88888b.db........o88b....d88b....88b..d88..d88888b.<br>",
    "88...I8I...88.88......88......d8P..Y8..8P..Y8..88.YbdP.88.88......<br>",
    "88...I8I...88.88ooooo.88......8P......88....88.88..88..88.88ooooo.<br>",
    "Y8...I8I...88.88~~~~~.88......8b......88....88.88..88..88.88~~~~~.<br>",
    ".8b.d8.8b.d8..88......88booo..Y8b..d8..8b..d8..88..88..88.88......<br>",
    "..8b8...8d8...Y88888P.Y88888P...Y88P....Y88P...YP..YP..YP.Y88888P.<br>",
    
    
]

const windowContents = {
    'About us': {
        title: 'About HackerHotel',
        text: "HackerHotel is a new concept of decentralising hotel rooms during blockchain conferences. We're matching and mixing you with new people alongside organizing side events fitted to the people part of our concept.",
        buttonText: 'Learn More',
        buttonLink: 'About HackerHotel Details',
        backgroundImage: 'https://images.beta.cosmos.so/8dd7b3ab-3edd-4986-bcb1-4dd7be7e84cd?format=jpeg'
    },
    'Events': {
        title: 'Upcoming Events',
        text: 'Join us for exciting AI conferences and workshops throughout the year.',
        buttonText: 'View Calendar',
        buttonLink: 'Event Details',
        backgroundImage: 'https://images.beta.cosmos.so/e3852a93-c716-4799-b052-335fd4ca1405.?format=jpeg'
    },
    'Book Stay': {
        title: 'Join Anthropic',
        text: 'Explore career opportunities and join our team of AI researchers and engineers.',
        buttonText: 'View Openings',
        buttonLink: 'Booking Details',
        backgroundImage: 'https://images.beta.cosmos.so/3adbc54d-e2dc-42db-8e3a-069bbd0debf7.?format=jpeg'
    },
    'Scholarship': {
        title: 'Anthropic Scholarship Program',
        text: 'We offer scholarships to support promising students in AI and related fields.',
        buttonText: 'Apply Now',
        buttonLink: 'Scholarship Details',
        backgroundImage: 'https://images.beta.cosmos.so/78b861fb-1dd5-436e-a66f-56978a2206c9?format=jpeg'
    },
    'pictures': {
        title: 'Image Gallery',
        text: 'Browse through our collection of AI-generated and research-related images.',
        buttonText: 'Open Gallery',
        buttonLink: 'Gallery Details',
        backgroundImage: 'https://www.cosmos.so/e/291577264'
    },
    'videos': {
        title: 'Video Library',
        text: 'Watch presentations, interviews, and demonstrations from our research team.',
        buttonText: 'Play Videos',
        buttonLink: 'Video Details',
        backgroundImage: 'https://www.cosmos.so/e/736953576'
    },
    'music': {
        title: 'AI-Generated Music',
        text: 'Listen to music compositions created by our AI models.',
        buttonText: 'Play Music',
        buttonLink: 'Music Details',
        backgroundImage: 'https://www.cosmos.so/e/1276284316'
    },
    'Sposonsors & Partners': {
        title: 'Our Sponsors and Partners',
        text: 'Learn about the organizations collaborating with Anthropic on AI research and development.',
        buttonText: 'View Partners',
        buttonLink: 'Partner Details',
        backgroundImage: 'https://www.cosmos.so/e/1276284316'
    }
};

let zIndex = 100;

function typeWriter(text, index, callback) {
    const chunkSize = 15;
    let end = Math.min(index + chunkSize, text.length);
    let chunk = text.substring(index, end);

    let processedChunk = '';
    for (let i = 0; i < chunk.length; i++) {
        if (chunk.substr(i, 4) === '<br>' && i + 3 < chunk.length) {
            processedChunk += '<br>';
            i += 3;
        } else {
            processedChunk += chunk[i];
        }
    }
    
    bootScreen.innerHTML += processedChunk;

    if (end < text.length) {
        setTimeout(() => {
            requestAnimationFrame(() => typeWriter(text, end, callback));
        }, 5);
    } else if (typeof callback === 'function') {
        setTimeout(callback, 10);
    }
}

export function startBootSequence(messageIndex) {
    if (messageIndex < bootMessages.length) {
        typeWriter(bootMessages[messageIndex], 0, () => {
            setTimeout(() => startBootSequence(messageIndex + 1), 15);
        });
    } else {
        setTimeout(() => {
            bootScreen.style.display = 'none';
        }, 1000);
    }
}

function adjustFontSize() {
    const viewportWidth = window.innerWidth;
    const longestLineLength = Math.max(...bootMessages.map(msg => msg.replace('<br>', '').length));
    
    const padding = 20;
    const availableWidth = viewportWidth - padding;
    const fontSize = availableWidth / longestLineLength;
    
    bootScreen.style.fontSize = `${Math.max(fontSize, 1)}px`;
    bootScreen.style.width = `${availableWidth}px`;
}

function createWindow(windowName, isLarge = false) {
    const content = windowContents[windowName];
    const window = document.createElement('div');
    window.className = 'window';
    window.setAttribute('data-name', windowName);
    
    window.innerHTML = `
        <div class="window-header">
            <span>${windowName}</span>
            <span class="close-button">×</span>
        </div>
        <div class="window-content">
            <h2 class="window-title">${content.title}</h2>
            <p class="window-text">${content.text}</p>
            <button class="window-button">${content.buttonText}</button>
        </div>
    `;
    
    const desktop = document.querySelector('.desktop');
    desktop.appendChild(window);
    
    // Set initial size and position
    window.style.width = isLarge ? '600px' : '400px';
    window.style.top = `${50 + Math.random() * 100}px`;
    window.style.left = `${50 + Math.random() * 100}px`;
    
    // Set background
    window.style.backgroundImage = `url('${content.backgroundImage}')`;
    
    // Adjust window height to fit content
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const windowContent = entry.target;
            const windowHeight = windowContent.offsetHeight + window.querySelector('.window-header').offsetHeight;
            window.style.height = `${windowHeight}px`;
        }
    });
    
    resizeObserver.observe(window.querySelector('.window-content'));
    
    return window;
}




function makeWindowDraggable(window) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === window.querySelector('.window-header') || window.querySelector('.window-header').contains(e.target)) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, window);
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    window.addEventListener('mousedown', dragStart, false);
    window.addEventListener('touchstart', dragStart, false);
    document.addEventListener('mousemove', drag, false);
    document.addEventListener('touchmove', drag, false);
    document.addEventListener('mouseup', dragEnd, false);
    document.addEventListener('touchend', dragEnd, false);
}
function updateTaskbar() {
    const taskbar = document.querySelector('.taskbar');
    const openWindows = document.querySelectorAll('.window');
    const startButton = taskbar.querySelector('.start-button');
    const clock = taskbar.querySelector('.clock');
    
    // Clear existing taskbar buttons
    const existingButtons = taskbar.querySelectorAll('.taskbar-button');
    existingButtons.forEach(button => button.remove());
    
    // Add buttons for open windows
    openWindows.forEach(window => {
        if (window.style.display !== 'none') {
            const button = document.createElement('div');
            button.className = 'taskbar-button';
            button.textContent = window.getAttribute('data-name');
            button.addEventListener('click', () => {
                window.style.display = 'block';
                window.style.zIndex = ++zIndex;
            });
            // Insert the button after the start button
            startButton.insertAdjacentElement('afterend', button);
        }
    });
}

export function initializeDesktop() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const windowName = this.getAttribute('data-window');
            let window = document.querySelector(`.window[data-name="${windowName}"]`);
            if (!window) {
                window = createWindow(windowName);
                makeWindowDraggable(window);
                window.querySelector('.close-button').addEventListener('click', function() {
                    window.style.display = 'none';
                    updateTaskbar();
                });
                window.querySelector('.window-button').addEventListener('click', function() {
                    const largeWindow = createWindow(windowContents[windowName].buttonLink, true);
                    makeWindowDraggable(largeWindow);
                    largeWindow.querySelector('.close-button').addEventListener('click', function() {
                        largeWindow.style.display = 'none';
                        updateTaskbar();
                    });
                    largeWindow.style.display = 'block';
                    largeWindow.style.zIndex = ++zIndex;
                    updateTaskbar();
                });
            }
            window.style.display = 'block';
            window.style.zIndex = ++zIndex;
            updateTaskbar();
        });
    });
}

export function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();