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
        'About HH': {
            title: 'About HackerHotel',
            text: "HackerHotel is a new concept of decentralising hotel rooms during blockchain conferences. We're matching and mixing you with new people alongside organizing side events fitted to the people part of our concept.",
            buttonText: 'Learn More',
            buttonLink: 'https://hackerhotel.notion.site/Hacker-Hotel-Wiki-f693e7170a4c4e44be6ef77926a99409',
            backgroundImage: 'https://i.imgur.com/1XoLP03.png'
        },
        'Events': {
            title: 'Events',
            text: 'Join us for exciting events and workshops throughout devcon.',
            buttonText: 'View Calendar',
            buttonLink: 'https://lu.ma/hackerhotel',    
            backgroundImage: 'https://images.beta.cosmos.so/c6d07b40-5513-432f-81ac-72735ad42ea6?format=jpeg'
        },
        'Book Stay': {
        
            title: 'Apply to be a guest',
            text: '',
            content: '<typebot-standard style="width: 100%; height: 500px;"></typebot-standard>',
            backgroundImage: 'https://images.beta.cosmos.so/3adbc54d-e2dc-42db-8e3a-069bbd0debf7.?format=jpeg'
        },
        'Scholarship': {
            title: 'HackerHotel Scholarship Program',
            text: 'We offer scholarships to support promising peers and founders to join at a reduced or free rate. Text our founders directly to inquire',
            buttonText: 'Apply Now',
            buttonLink: 'https://telegram.me/dragon_mf',
            backgroundImage: 'https://images.beta.cosmos.so/78b861fb-1dd5-436e-a66f-56978a2206c9?format=jpeg'
        },
        'pictures': {
            title: 'Vibes',
            text: "What does Hackerhotel stand for? Checkout our moodboard!",
            buttonText: 'Open Gallery',
            buttonLink: 'https://www.cosmos.so/lazarjaksic/hh',
            backgroundImage: 'https://images.beta.cosmos.so/06702368-7614-46cb-a1fd-a3d5d6fc85df?format=jpeg'
        },
    /* 'videos': {
            title: 'Video Library',
            text: 'Watch presentations, interviews, and demonstrations from our research team.',
            buttonText: 'Play Videos',
            buttonLink: 'Video Details',
            backgroundImage: 'https://www.cosmos.so/e/736953576'
        },
        'FAQ': {
            title: 'Code Of Conduct!',
            text: 'Listen to music compositions created by our AI models.',
            buttonText: 'Open FAQ',
            buttonLink: 'https://hackerhotel.notion.site/Hacker-Hotel-FAQs-ab0a4403f75f45b09e35d09859705730',
            backgroundImage: 'https://www.cosmos.so/e/1276284316'
        },*/
        'Sposonsors & Partners': {
            title: 'Our Sponsors and Partners',
            text: 'Get in touch with us to create your next experience, tailored towards our decentralised hotel guests. Fund the future geniuses of our industry to get accomodation during the largest Ethereum Events',
            buttonText: 'View Partners',
            buttonLink: 'https://telegram.me/rakymi',
            backgroundImage: 'https://images.beta.cosmos.so/c2b5b739-8c08-449b-9a86-3266080493e5?format=jpeg'
        }
    };


    let zIndex = 100;
    function typeWriter(text, index, callback) {
        const chunkSize = 15;
        let end = Math.min(index + chunkSize, text.length);
        let chunk = text.substring(index, end);

        let processedChunk = chunk.replace(/<br>/g, '<br>');
        
        bootScreen.innerHTML += processedChunk;

        if (end < text.length) {
            requestAnimationFrame(() => typeWriter(text, end, callback));
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
        const fontSize = Math.max(availableWidth / longestLineLength, 1);
        
        bootScreen.style.fontSize = `${fontSize}px`;
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
            ${content.content || ''}
            ${content.buttonText ? `<a href="${content.buttonLink}" target="_blank" class="window-button">${content.buttonText}</a>` : ''}
        </div>
    `;
    
    const desktop = document.querySelector('.desktop');
    desktop.appendChild(window);
    
    window.style.width = isLarge ? '600px' : '400px';
    window.style.top = `${50 + Math.random() * 100}px`;
    window.style.left = `${50 + Math.random() * 100}px`;
    window.style.backgroundImage = `url('${content.backgroundImage}')`;
    
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const windowContent = entry.target;
            const windowHeight = windowContent.offsetHeight + window.querySelector('.window-header').offsetHeight;
            window.style.height = `${windowHeight}px`;
        }
    });
    
    resizeObserver.observe(window.querySelector('.window-content'));
    
    makeWindowDraggable(window);

    const closeButton = window.querySelector('.close-button');
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        window.style.display = 'none';
        updateTaskbar();
    });

    if (windowName === 'Book Stay') {
        initializeTypebot();
        window.style.zIndex = 1000; // Ensure highest z-index
    }


    const windowButton = window.querySelector('.window-button');
if (windowButton) {
    windowButton.addEventListener('click', function(e) {
        e.stopPropagation();
        window.open(this.href, '_blank');
    });
}

    return window;
}

function initializeTypebot() {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `
        import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'
        Typebot.initStandard({ typebot: "hackerhotel" });
    `;
    document.body.appendChild(typebotInitScript);
}

function makeWindowDraggable(window) {
    let isDragging = false;
    let startX, startY;

    function dragStart(e) {
        // Check if the target is a button or an interactive element
        if (e.target.tagName.toLowerCase() === 'button' ||
            e.target.tagName.toLowerCase() === 'a' ||
            e.target.classList.contains('close-button') ||
            e.target.closest('typebot-standard')) {
            return;
        }

        isDragging = true;
        const event = e.touches ? e.touches[0] : e;
        startX = event.clientX - window.offsetLeft;
        startY = event.clientY - window.offsetTop;
        window.style.zIndex = window.getAttribute('data-name') === 'Book Stay' ? 1000 : ++zIndex;

        if (e.type === "mousedown") {
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
        } else if (e.type === "touchstart") {
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', dragEnd);
        }
    }

    function drag(e) {
        if (!isDragging) return;
        
        const event = e.touches ? e.touches[0] : e;
        const newX = event.clientX - startX;
        const newY = event.clientY - startY;
        
        window.style.left = `${newX}px`;
        window.style.top = `${newY}px`;
        
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    function dragEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', dragEnd);
    }

    window.addEventListener('mousedown', dragStart);
    window.addEventListener('touchstart', dragStart, { passive: false });

    // Prevent default behavior on touchmove for the entire window
    window.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    // Allow scrolling in the window content
    const content = window.querySelector('.window-content');
    if (content) {
        content.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
    }

    // Special handling for typebot element
    const typebotElement = window.querySelector('typebot-standard');
    if (typebotElement) {
        typebotElement.addEventListener('mousedown', (e) => e.stopPropagation());
        typebotElement.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
    }
}

function updateTaskbar() {
    const taskbar = document.querySelector('.taskbar');
    const openWindows = document.querySelectorAll('.window');
    const startButton = taskbar.querySelector('.start-button');
    
    taskbar.querySelectorAll('.taskbar-button').forEach(button => button.remove());
    
    openWindows.forEach(window => {
        if (window.style.display !== 'none') {
            const button = document.createElement('div');
            button.className = 'taskbar-button';
            button.textContent = window.getAttribute('data-name');
            button.addEventListener('click', () => {
                window.style.display = 'block';
                window.style.zIndex = window.getAttribute('data-name') === 'Book Stay' ? 1000 : ++zIndex;
            });
            startButton.insertAdjacentElement('afterend', button);
        }
    });
}

export function initializeDesktop() {
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const windowName = this.getAttribute('data-window');
            let window = document.querySelector(`.window[data-name="${windowName}"]`);
            if (!window) {
                window = createWindow(windowName);
            }
            window.style.display = 'block';
            window.style.zIndex = windowName === 'Book Stay' ? 1000 : ++zIndex;
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