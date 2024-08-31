// Minesweeper game in vanilla JavaScript
const GRID_SIZE = 9;
const NUM_MINES = 10;

function createMinesweeperGame() {
    let grid = [];
    let gameOver = false;

    function initializeGrid() {
        grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
        
        // Place mines
        let minesPlaced = 0;
        while (minesPlaced < NUM_MINES) {
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * GRID_SIZE);
            if (grid[row][col] !== 'X') {
                grid[row][col] = 'X';
                minesPlaced++;
            }
        }

        // Calculate numbers
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (grid[i][j] !== 'X') {
                    grid[i][j] = countAdjacentMines(i, j);
                }
            }
        }
    }

    function countAdjacentMines(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newRow = row + i;
                const newCol = col + j;
                if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
                    if (grid[newRow][newCol] === 'X') {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function revealCell(row, col) {
        if (gameOver) return;

        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell.classList.contains('revealed') || cell.classList.contains('flagged')) return;

        cell.classList.add('revealed');

        if (grid[row][col] === 'X') {
            cell.textContent = '💣';
            gameOver = true;
            revealAllMines();
            alert('Game Over! You hit a mine.');
        } else if (grid[row][col] === 0) {
            // Reveal adjacent cells for empty cell
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = row + i;
                    const newCol = col + j;
                    if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
                        revealCell(newRow, newCol);
                    }
                }
            }
        } else {
            cell.textContent = grid[row][col];
        }

        checkWin();
    }

    function toggleFlag(row, col) {
        if (gameOver) return;

        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell.classList.contains('revealed')) return;

        cell.classList.toggle('flagged');
        cell.textContent = cell.classList.contains('flagged') ? '🚩' : '';
    }

    function revealAllMines() {
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (grid[i][j] === 'X') {
                    const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                    cell.classList.add('revealed');
                    cell.textContent = '💣';
                }
            }
        }
    }

    function checkWin() {
        const unrevealed = document.querySelectorAll('.cell:not(.revealed)').length;
        if (unrevealed === NUM_MINES) {
            gameOver = true;
            alert('Congratulations! You won!');
        }
    }

    function createBoard() {
        const board = document.createElement('div');
        board.className = 'minesweeper-board';
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => revealCell(i, j));
                cell.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    toggleFlag(i, j);
                });
                board.appendChild(cell);
            }
        }
        return board;
    }

    function init() {
        initializeGrid();
        const game = document.createElement('div');
        game.className = 'minesweeper-game';
        
        const title = document.createElement('h2');
        title.textContent = 'Minesweeper';
        game.appendChild(title);

        const board = createBoard();
        game.appendChild(board);

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset Game';
        resetButton.addEventListener('click', () => {
            gameOver = false;
            initializeGrid();
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.className = 'cell';
                cell.textContent = '';
            });
        });
        game.appendChild(resetButton);

        return game;
    }

    return { init };
}

// Function to create and show/hide the Minesweeper game
function toggleMinesweeperGame() {
    let modal = document.getElementById('minesweeper-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'minesweeper-modal';
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-button';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = toggleMinesweeperGame;
        
        modalContent.appendChild(closeBtn);
        
        const game = createMinesweeperGame();
        modalContent.appendChild(game.init());
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
    
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Link the game to the "Login" button
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.start-button');
    if (loginButton) {
        loginButton.addEventListener('click', toggleMinesweeperGame);
    } else {
        console.error("Login button not found. Make sure the HTML element with class 'start-button' exists.");
    }
});

// Add styles
const style = document.createElement('style');
style.textContent = `
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
        grid-template-columns: repeat(${GRID_SIZE}, 30px);
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
`;
document.head.appendChild(style);