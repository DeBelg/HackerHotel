(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=d(s);fetch(s.href,a)}})();const g=document.getElementById("boot-screen"),h=["ooooo...ooooo.....................oooo...........................ooooo...ooooo.............................oooo.<br>","888.....888.......................888............................888.....888...............o8..............888.<br>","888.....888....oooo......ooooo....888..oooo....ooooo...oooo.d8b..888.....888....ooooo....o888oo...ooooo....888.<br>","888ooooo888..P..)88b..d88...Y8b...888..8P....d88...88b..8888P....888ooooo888..d88...88b...888...d88...88b..888.<br>","888.....888...oP.888..888.........888888.....888ooo888..888......888.....888..888...888...888...888ooo888..888.<br>","888.....888.d8(..888..888....o8...888..88b...888.....o..888......888.....888..888...888...888...888.....o..888.<br>","o888o..o888o.Y888888o..Y8bod8P..o888o.o888o...Y8bod8P..d888b....o888o...o888o..Y8bod8P....888...Y8bod8P..o888o.<br>","<br>","<br>",".o88b..db...db.d88888b...o88b..db...dD.d888888b.d8b...db..d888b........88b..d88..d88888b..88b..d88....d88b...d8888b..db....db.<br>","d8P..Y8.88...88.88......d8P..Y8.88.,8P.....88....888o..88.88..Y8b......88.YbdP.88.88......88.YbdP.88..8P..Y8..88...8D..8b..d8..<br>","8P......88ooo88.88ooooo.8P......88,8P......88....88V8o.88.88...........88..88..88.88ooooo.88..88..88.88....88.88oobY....8bd8...<br>","8b......88~~~88.88~~~~~.8b......88.8b......88....88.V8o88.88..ooo......88..88..88.88~~~~~.88..88..88.88....88.88.8b......88....<br>","Y8b..d8.88...88.88......Y8b..d8.88..88.....88....88..V888.88..~8~......88..88..88.88......88..88..88..8b..d8..88..88.....88....<br>","..Y88P..YP...YP.Y88888P...Y88P..YP...YD.Y888888P.VP...V8P..Y888P.......YP..YP..YP.Y88888P.YP..YP..YP...Y88P...88...YD....YP...<br>","<br>","<br>",".d888888b..88b..d88..d8888b....d88b...d8888b..d888888b.d888888b.d8b...db..d888b........d8888..db......d88888b.d88888b.d8888b..<br>","...88....88.YbdP.88.88...8D..8P..Y8..88...8D..~~88~~.....88....888o..88.88..Y8b......88...YP.88......88......88......88...8D.<br>","...88....88..88..88.88oodD..88....88.88oobY.....88.......88....88V8o.88.88............8bo....88......88ooooo.88ooooo.88oodD..<br>","...88....88..88..88.88~~~...88....88.88.8b......88.......88....88.V8o88.88..ooo.........Y8b..88......88~~~~~.88~~~~~.88~~~...<br>","...88....88..88..88.88.......8b..d8..88..88.....88.......88....88..V888.88..~8~......db...8D.88booo..88......88......88......<br>","Y888888P.YP..YP..YP.88........Y88P...88...YD....YP....Y888888P.VP...V8P..Y888P........8888Y..Y88888P.Y88888P.Y88888P.88......<br>","<br>","<br>","d8888b..d88888b.d8b...db.d8888b..d88888b.d8888b..d888888b.d8b...db..d888b..........d88b...d8b.....o88b..db....db.d88888D.d88888D.d888888b.<br>","88...8D.88......888o..88.88...8D.88......88...8D....88....888o..88.88..Y8b..........8P..d8...8b.d8P..Y8.88....88.YP..d8..YP..d8.....88....<br>","88oobY..88ooooo.88V8o.88.88...88.88ooooo.88oobY.....88....88V8o.88.88...............88..88ooo88.8P......88....88....d8......d8......88....<br>","88.8b...88~~~~~.88.V8o88.88...88.88~~~~~.88.8b......88....88.V8o88.88..ooo..........88..88~~~88.8b......88....88...d8......d8.......88....<br>","88..88..88......88..V888.88...8D.88......88..88.....88....88..V888.88..~8~......db..88..88...88.Y8b..d8.88b..d88..d8..db..d8..db....88....<br>","88...YD.Y88888P.VP...V8P.Y8888D..Y88888P.88...YD.Y888888P.VP...V8P..Y888P.......Y8888P..YP...YP...Y88P..~Y8888P..d88888P.d88888P.Y888888P.<br>","<br>","<br>",".d8888..d888888b...d8b...d8888b..d888888b.d888888b.d8b...db..d888b........d8888..d88888b.d8888b..db....db.d888888b...o88b..d88888b..d8888..<br>","88...YP..~~88~~..d8...8b.88...8D..~~88~~.....88....888o..88.88..Y8b......88...YP.88......88...8D.88....88....88....d8P..Y8.88......88...YP.<br>",".8bo.......88....88ooo88.88oobY.....88.......88....88V8o.88.88............8bo....88ooooo.88oobY..Y8....8P....88....8P......88ooooo..8bo....<br>","...Y8b.....88....88~~~88.88.8b......88.......88....88.V8o88.88..ooo.........Y8b..88~~~~~.88.8b....8b..d8.....88....8b......88~~~~~....Y8b..<br>","db...8D....88....88...88.88..88.....88.......88....88..V888.88..~8~......db...8D.88......88..88....8bd8......88....Y8b..d8.88......db...8D.<br>",".8888Y.....YP....YP...YP.88...YD....YP....Y888888P.VP...V8P..Y888P........8888Y..Y88888P.88...YD....YP....Y888888P...Y88P..Y88888P..8888Y..<br>","<br>","<br>","d8888b....d88b.....d88b...d888888b.db........d88b.....d8b...d8888b..d88888b.d8888b.........o88b....d88b....88b..d88..d8888b..db......d88888b.d888888b.d88888b.<br>","88...8D..8P..Y8...8P..Y8...~~88~~..88.......8P..Y8..d8...8b.88...8D.88......88...8D......d8P..Y8..8P..Y8..88.YbdP.88.88...8D.88......88.......~~88~~..88......<br>","88oooY..88....88.88....88....88....88......88....88.88ooo88.88...88.88ooooo.88oobY.......8P......88....88.88..88..88.88oodD..88......88ooooo....88....88ooooo.<br>","88~~~b..88....88.88....88....88....88......88....88.88~~~88.88...88.88~~~~~.88.8b........8b......88....88.88..88..88.88~~~...88......88~~~~~....88....88~~~~~.<br>","88...8D..8b..d8...8b..d8.....88....88booo...8b..d8..88...88.88...8D.88......88..88.......Y8b..d8..8b..d8..88..88..88.88......88booo..88.........88....88......<br>","Y8888P....Y88P.....Y88P......YP....Y88888P...Y88P...YP...YP.Y8888D..Y88888P.88...YD........Y88P....Y88P...YP..YP..YP.88......Y88888P.Y88888P....YP....Y88888P.<br>","<br>","<br>","db...d8b...db.d88888b.db........o88b....d88b....88b..d88..d88888b.<br>","88...I8I...88.88......88......d8P..Y8..8P..Y8..88.YbdP.88.88......<br>","88...I8I...88.88ooooo.88......8P......88....88.88..88..88.88ooooo.<br>","Y8...I8I...88.88~~~~~.88......8b......88....88.88..88..88.88~~~~~.<br>",".8b.d8.8b.d8..88......88booo..Y8b..d8..8b..d8..88..88..88.88......<br>","..8b8...8d8...Y88888P.Y88888P...Y88P....Y88P...YP..YP..YP.Y88888P.<br>"];function x(o,t,d){let s=Math.min(t+15,o.length),a=o.substring(t,s),l="";for(let u=0;u<a.length;u++)a.substr(u,4)==="<br>"&&u+3<a.length?(l+="<br>",u+=3):l+=a[u];g.innerHTML+=l,s<o.length?setTimeout(()=>{requestAnimationFrame(()=>x(o,s,d))},5):typeof d=="function"&&setTimeout(d,10)}function v(o){o<h.length?x(h[o],0,()=>{setTimeout(()=>v(o+1),15)}):setTimeout(()=>{g.style.display="none"},1e3)}function L(){const o=window.innerWidth,t=Math.max(...h.map(a=>a.replace("<br>","").length)),i=o-20,s=i/t;g.style.fontSize=`${Math.max(s,1)}px`,g.style.width=`${i}px`}window.addEventListener("resize",L);L();const E={"About us":{title:"About Anthropic",text:"Anthropic is an AI safety and research company dedicated to developing safe and ethical AI systems.",buttonText:"Learn More",buttonLink:"https://www.anthropic.com",backgroundImage:"https://images.beta.cosmos.so/8dd7b3ab-3edd-4986-bcb1-4dd7be7e84cd?format=jpeg"},Events:{title:"Upcoming Events",text:"Join us for exciting AI conferences and workshops throughout the year.",buttonText:"View Calendar",buttonLink:"https://www.anthropic.com/events",backgroundImage:"https://images.beta.cosmos.so/e3852a93-c716-4799-b052-335fd4ca1405.?format=jpeg"},"Book Stay":{title:"Join Anthropic",text:"Explore career opportunities and join our team of AI researchers and engineers.",buttonText:"View Openings",buttonLink:"https://www.anthropic.com/careers",backgroundImage:"https://images.beta.cosmos.so/3adbc54d-e2dc-42db-8e3a-069bbd0debf7.?format=jpeg"},Scholarship:{title:"Anthropic Scholarship Program",text:"We offer scholarships to support promising students in AI and related fields.",buttonText:"Apply Now",buttonLink:"https://www.anthropic.com/scholarship",backgroundImage:"https://images.beta.cosmos.so/78b861fb-1dd5-436e-a66f-56978a2206c9?format=jpeg"},pictures:{title:"Image Gallery",text:"Browse through our collection of AI-generated and research-related images.",buttonText:"Open Gallery",buttonLink:"#",backgroundImage:"https://www.cosmos.so/e/291577264"},videos:{title:"Video Library",text:"Watch presentations, interviews, and demonstrations from our research team.",buttonText:"Play Videos",buttonLink:"#",backgroundImage:"https://www.cosmos.so/e/736953576"},music:{title:"AI-Generated Music",text:"Listen to music compositions created by our AI models.",buttonText:"Play Music",buttonLink:"#",backgroundImage:"https://www.cosmos.so/e/1276284316"},"Sposonsors & Partners":{title:"Our Sponsors and Partners",text:"Learn about the organizations collaborating with Anthropic on AI research and development.",buttonText:"View Partners",buttonLink:"https://www.anthropic.com/partners",backgroundImage:"https://www.cosmos.so/e/1276284316"}};function I(o){const t=E[o],d=document.createElement("div");return d.className="window",d.style.backgroundImage=`url('${t.backgroundImage}')`,d.innerHTML=`
        <div class="window-header">
            <span>${o}</span>
            <span class="close-button">×</span>
        </div>
        <div class="window-content">
            <h2 class="window-title">${t.title}</h2>
            <p class="window-text">${t.text}</p>
            <a href="${t.buttonLink}" class="window-button" target="_blank">${t.buttonText}</a>
        </div>
    `,document.querySelector(".desktop").appendChild(d),d}function C(o){let t=!1,d,i,s,a,l=0,u=0;function Y(e){e.type==="touchstart"?(s=e.touches[0].clientX-l,a=e.touches[0].clientY-u):(s=e.clientX-l,a=e.clientY-u),(e.target===o||o.contains(e.target))&&(t=!0,e.preventDefault())}function P(e){t&&(e.preventDefault(),e.type==="touchmove"?(d=e.touches[0].clientX-s,i=e.touches[0].clientY-a):(d=e.clientX-s,i=e.clientY-a),l=d,u=i,n(d,i,o))}function r(e){t&&(s=d,a=i,t=!1)}function n(e,c,f){f.style.transform=`translate3d(${e}px, ${c}px, 0)`}o.addEventListener("mousedown",Y,!1),o.addEventListener("touchstart",Y,{passive:!1}),document.addEventListener("mousemove",P,!1),document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("mouseup",r,!1),document.addEventListener("touchend",r,!1),o.addEventListener("click",e=>{t&&e.stopPropagation()},!1)}function S(){document.querySelectorAll(".icon").forEach(t=>{t.addEventListener("click",function(){const d=this.getAttribute("data-window");let i=document.querySelector(`.window[data-name="${d}"]`);i||(i=I(d),i.setAttribute("data-name",d),C(i),i.querySelector(".close-button").addEventListener("click",function(){i.style.display="none"})),i.style.display="block",i.style.zIndex=++zIndex})})}function w(){const o=new Date,t=String(o.getHours()).padStart(2,"0"),d=String(o.getMinutes()).padStart(2,"0");document.getElementById("clock").textContent=`${t}:${d}`}document.addEventListener("DOMContentLoaded",()=>{v(0),S(),setInterval(w,1e3),w()});const b=9,y=10;function V(){let o=[],t=!1;function d(){o=Array(b).fill().map(()=>Array(b).fill(0));let r=0;for(;r<y;){const n=Math.floor(Math.random()*b),e=Math.floor(Math.random()*b);o[n][e]!=="X"&&(o[n][e]="X",r++)}for(let n=0;n<b;n++)for(let e=0;e<b;e++)o[n][e]!=="X"&&(o[n][e]=i(n,e))}function i(r,n){let e=0;for(let c=-1;c<=1;c++)for(let f=-1;f<=1;f++){const p=r+c,m=n+f;p>=0&&p<b&&m>=0&&m<b&&o[p][m]==="X"&&e++}return e}function s(r,n){if(t)return;const e=document.querySelector(`[data-row="${r}"][data-col="${n}"]`);if(!(e.classList.contains("revealed")||e.classList.contains("flagged"))){if(e.classList.add("revealed"),o[r][n]==="X")e.textContent="💣",t=!0,l(),alert("Game Over! You hit a mine.");else if(o[r][n]===0)for(let c=-1;c<=1;c++)for(let f=-1;f<=1;f++){const p=r+c,m=n+f;p>=0&&p<b&&m>=0&&m<b&&s(p,m)}else e.textContent=o[r][n];u()}}function a(r,n){if(t)return;const e=document.querySelector(`[data-row="${r}"][data-col="${n}"]`);e.classList.contains("revealed")||(e.classList.toggle("flagged"),e.textContent=e.classList.contains("flagged")?"🚩":"")}function l(){for(let r=0;r<b;r++)for(let n=0;n<b;n++)if(o[r][n]==="X"){const e=document.querySelector(`[data-row="${r}"][data-col="${n}"]`);e.classList.add("revealed"),e.textContent="💣"}}function u(){document.querySelectorAll(".cell:not(.revealed)").length===y&&(t=!0,alert("Congratulations! You won!"))}function Y(){const r=document.createElement("div");r.className="minesweeper-board";for(let n=0;n<b;n++)for(let e=0;e<b;e++){const c=document.createElement("div");c.className="cell",c.dataset.row=n,c.dataset.col=e,c.addEventListener("click",()=>s(n,e)),c.addEventListener("contextmenu",f=>{f.preventDefault(),a(n,e)}),r.appendChild(c)}return r}function P(){d();const r=document.createElement("div");r.className="minesweeper-game";const n=document.createElement("h2");n.textContent="Minesweeper",r.appendChild(n);const e=Y();r.appendChild(e);const c=document.createElement("button");return c.textContent="Reset Game",c.addEventListener("click",()=>{t=!1,d(),document.querySelectorAll(".cell").forEach(p=>{p.className="cell",p.textContent=""})}),r.appendChild(c),r}return{init:P}}function D(){let o=document.getElementById("minesweeper-modal");if(!o){o=document.createElement("div"),o.id="minesweeper-modal",o.className="modal";const t=document.createElement("div");t.className="modal-content";const d=document.createElement("span");d.className="close-button",d.innerHTML="&times;",d.onclick=D,t.appendChild(d);const i=V();t.appendChild(i.init()),o.appendChild(t),document.body.appendChild(o)}o.style.display=o.style.display==="block"?"none":"block"}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".start-button");o?o.addEventListener("click",D):console.error("Login button not found. Make sure the HTML element with class 'start-button' exists.")});const k=document.createElement("style");k.textContent=`
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
       
        border: 1px solid #888;
        width: 320px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .close-button {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    .close-button:hover,
    .close-button:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .minesweeper-game {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #c0c0c0;
        padding: 20px;
        border: 3px outset #ffffff;
    }
    .minesweeper-board {
        display: grid;
        grid-template-columns: repeat(${b}, 30px);
        grid-gap: 1px;
        background-color: #808080;
        border: 3px inset #ffffff;
        margin: 20px 0;
    }
    .cell {
        width: 30px;
        height: 30px;
        background-color: #c0c0c0;
        border: 2px outset #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        cursor: pointer;
    }
    .cell.revealed {
        border: 1px solid #808080;
    }
    .minesweeper-game button {
        background-color: #c0c0c0;
        border: 2px outset #ffffff;
        padding: 5px 10px;
        cursor: pointer;
    }
    .minesweeper-game button:active {
        border-style: inset;
    }
`;document.head.appendChild(k);
