/**
 * Represents the positions of mountains on the game grid.
 */
const mountain_pos = [
    [2, 2],
    [4, 9],
    [6, 4],
    [9, 10],
    [10, 6]
];

/**
 * Represents different elements with their properties.
 */
const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [1, 0, 0],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 0, 0],
        [1, 1, 1],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
]

/**
 * Represents the missions available in the game, categorized as "basic" and "extra."
 */
const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }
  ],
}

/**
 * Represents different seasons with their respective time units.
 */
const seasons = [
    { name: 'Tavasz', timeUnits: 7 },
    { name: 'Nyár', timeUnits: 7 },
    { name: 'Ősz', timeUnits: 7 },
    { name: 'Tél', timeUnits: 7 }
];

/**
 * @type {HTMLDivElement[][]} Represents the game grid.
 */
let grid;
/**
 * @type {HTMLTableElement} Represents the game grid.
 */
let table;
/**
  * @type {Object|null} Represents the current shape being manipulated.
 */
let currentShape = null;
/**
 * @type {Array.<Object>} Represents the list of available shapes.
 */
let shapes = [];
/**
  * @type {Array.<Array.<HTMLDivElement>>} Represents the grid for displaying the next shape. 
  */
const nextShapeGrid = [];
/**
 * @type {HTMLDivElement} Represents the HTML element for displaying the next shape matrix.
 */
let nextShapeMatrix;
/**
 * @type {boolean} Represents whether a shape is currently being dragged.
 */
let isDragged;
/**
 * @type {number} Represents the current row being hovered over.
 */
let row = -1;
/**
 * @type {number} Represents the current column being hovered over.
 */
let col = -1;
/**
 * @type {number} Represents the remaining time in the current season.
 */
let remainingTime;
/**
 * @type {string} Represents the previous season.
 */
let previousSeason = 'Tavasz';
/**
 * @type {string} Represents the current season.
 */
let currentSeason = 'Tavasz';
/**
 * @type {Array.<Object>} Represents the current set of missions.
 */
let currentMissions = [];
/**
 * @type {number} Represents the points accumulated in the spring season.
 */
let springPoints = 0;
/**
 * @type {number} Represents the points accumulated in the summer season.
 */
let summerPoints = 0;
/**
 * @type {number} Represents the points accumulated in the autumn season.
 */
let autumnPoints = 0;
/**
 * @type {number} Represents the points accumulated in the winter season.
 */
let winterPoints = 0;
/**
 * @type {number} Represents the total points accumulated in the game.
 */
let totalPoints = 0;
/**
 * @type {boolean} Represents whether the game is over.
 */
let isGameOver = false;

/**
 * Selects a set of missions for the player to complete.
 */
function selectMissions() {
    let allMissions = [...missions.basic, ...missions.extra];
    shuffleMissions(allMissions);
    currentMissions = allMissions.slice(0, 4);
    console.log(currentMissions);
}

/**
 * Shuffles an array of missions.
 * @param {Array.<Object>} missions - The array of missions to be shuffled.
 */
function shuffleMissions(missions) {
    for (let i = missions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [missions[i], missions[j]] = [missions[j], missions[i]];
    }
}

/**
 * Displays the selected missions on the game interface.
 */
function displayMissions() {

    const missionMap = {
        "Az erdő széle": 2,
        "Álmos-völgy": 7,
        "Krumpliöntözés": 3,
        "Határvidék": 11,
        "Fasor": 1,
        "Gazdag város": 4,
        "Öntözőcsatorna": 8,
        "Mágusok völgye": 9,
        "Üres telek": 10,
        "Sorház": 5,
        "Páratlan silók": 6,
        "Gazdag vidék": 12
    };

    const missionDivs = document.querySelectorAll('.mission');

    for (let i = 0; i < currentMissions.length; i++) {
        const missionNumber = missionMap[currentMissions[i].title];
        missionDivs[i].dataset.mission = missionNumber;
        missionDivs[i].style.backgroundImage = `url('assets/missions_hun/mission_${missionNumber.toString().padStart(2, '0')}.png')`;
        missionDivs[i].setAttribute('title', currentMissions[i].description);
    }
}

/**
 * Toggles the active status of missions based on the current season.
 */
function toggleActive() {
    const missionDivs = document.querySelectorAll('.mission');

    missionDivs.forEach(div => div.classList.remove('active'));

    switch (currentSeason) {
        case 'Tavasz':
            missionDivs[0].classList.add('active');
            missionDivs[1].classList.add('active');
            break;
        case 'Nyár':
            missionDivs[1].classList.add('active');
            missionDivs[2].classList.add('active');
            break;
        case 'Ősz':
            missionDivs[2].classList.add('active');
            missionDivs[3].classList.add('active');
            break;
        case 'Tél':
            missionDivs[3].classList.add('active');
            missionDivs[0].classList.add('active');
            break;
    }
}

/**
 * Shifts the list of shapes and selects the next shape.
 */
function shiftShapes() {
    if (shapes.length === 0) {
        shuffleShapes();
    }
    currentShape = shapes.shift();
}

/**
 * Shuffles the list of shapes.
 */
function shuffleShapes() {
    shapes = [...elements];
    for (let i = shapes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shapes[i], shapes[j]] = [shapes[j], shapes[i]];
    }
}

/**
 * Initializes the game grid and other essential elements.
 */
function makeGrid() {
    table = document.querySelector('#fields');

    grid = Array.from({ length: 11 },
        () => Array.from({ length: 11 },
            () => document.createElement('div')
        )
    );

    for (let y = 0; y < 11; y++) {
        for (let x = 0; x < 11; x++) {
            grid[y][x].classList.add('cell');
            grid[y][x].dataset.tile = 'empty';
            grid[y][x].dataset.x = x;
            grid[y][x].dataset.y = y;
            table.appendChild(grid[y][x]);
        }
    }

    for (let i = 0; i < mountain_pos.length; i++) {
        const mountain = mountain_pos[i];
        grid[mountain[0] - 1][mountain[1] - 1].dataset.tile = 'mountain';
    }

    nextShapeMatrix = document.querySelector('#next-shape-matrix');


    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.push(cell);
            nextShapeMatrix.appendChild(cell);
        }
        nextShapeGrid.push(row);
    }

    selectMissions();
    displayMissions();
    toggleActive();

    shuffleShapes();
    shiftShapes();
    nextShape(nextShapeGrid);
    isDragged = false;
    remainingTime = 28;
}

/**
 * Updates the current season and remaining time in the season.
 */
function updateSeasonAndTime() {
    let timePassed = 28 - remainingTime;
    let seasonIndex = Math.floor(timePassed / 7);
    if (seasonIndex > 3) {
        seasonIndex = 0;
    }

    previousSeason = currentSeason;
    currentSeason = seasons[seasonIndex].name;

    let timeInCurrentSeason = timePassed % 7;
    let remainingTimeInSeason = 7 - timeInCurrentSeason;

    document.getElementById('current-season').textContent = currentSeason;
    document.getElementById('time-remaining').textContent = remainingTimeInSeason;

    if (previousSeason !== currentSeason || remainingTime === 0) {
        evaluateMissions();
        toggleActive();
    }

    if (remainingTime <= 0) {
        totalPoints += hegyKorbe();
        document.querySelector('.total .points').textContent = totalPoints;
        isGameOver = true;
        alert(`Vége a játéknak! \nÖsszpontszám: ${totalPoints}`);
        return;
    }
}

/**
 * Evaluates and updates the points based on completed missions.
 */

/**
 * Toggles the dragging state of a shape.
 * @param {MouseEvent} event - The mouse event triggering the function.
 */
function toggleDrag(event) {
    isDragged = !isDragged;
    nextShapeMatrix.classList.toggle('dragging');
    document.body.style.cursor = isDragged ? 'grabbing' : 'default';

    if (isDragged) {
        nextShapeMatrix.style.left = `${event.clientX - nextShapeMatrix.offsetWidth / 2}px`;
        nextShapeMatrix.style.top = `${event.clientY - nextShapeMatrix.offsetHeight / 2}px`;
    }
}

/**
 * Handles the mousemove event when a shape is being dragged.
 * @param {MouseEvent} event - The mousemove event.
 */
document.addEventListener('mousemove', (event) => {
    if (isDragged) {
        nextShapeMatrix.style.left = `${event.clientX - nextShapeMatrix.offsetWidth / 2}px`;
        nextShapeMatrix.style.top = `${event.clientY - nextShapeMatrix.offsetHeight / 2}px`;
    }
});

/**
 * Displays the next shape on the interface.
 * @param {Array.<Array.<HTMLDivElement>>} grid - The grid for displaying the next shape.
 */
function nextShape(grid) {
    const shapeType = currentShape.type;
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            grid[y][x].dataset.tile = currentShape.shape[y][x] ? shapeType : '';
        }
    }
    document.getElementById('shape-time').textContent = currentShape.time;
}

/**
 * Checks if a shape can be placed at a specific location on the grid.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @returns {boolean} True if the shape can be placed, otherwise false.
 */
function canPlace(row, col) {
    if (isGameOver) {
        alert(`Vége a játéknak! \nÖsszpontszám: ${totalPoints}`);
        return false;
    }
    for (let cellOffsetY = 0; cellOffsetY < currentShape.shape.length; cellOffsetY++) {
        for (let cellOffsetX = 0; cellOffsetX < currentShape.shape[cellOffsetY].length; cellOffsetX++) {
            const x = col + cellOffsetX - 1;
            const y = row + cellOffsetY - 1;

            if (x >= 0 && x < 11 && y >= 0 && y < 11) {
                if (currentShape.shape[cellOffsetY][cellOffsetX] === 1 && grid[y][x].dataset.tile !== 'empty') {
                    return false;
                }
            } else if (currentShape.shape[cellOffsetY][cellOffsetX] === 1) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Places the current shape on the grid at the specified location.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 */
function placeShape(row, col) {
    if (!canPlace(row, col)) {
        console.error('Can\'t place the shape here!');
        return;
    }
    remainingTime -= currentShape.time;
    

    for (let cellOffsetY = 0; cellOffsetY < currentShape.shape.length; cellOffsetY++) {
        for (let cellOffsetX = 0; cellOffsetX < currentShape.shape[cellOffsetY].length; cellOffsetX++) {
            const x = col + cellOffsetX - 1;
            const y = row + cellOffsetY - 1;

            if (x >= 0 && x < 11 && y >= 0 && y < 11 && currentShape.shape[cellOffsetY][cellOffsetX] === 1) {
                grid[y][x].dataset.tile = currentShape.type;
            }
        }
    }
    updateSeasonAndTime();
    shiftShapes();
}

/**
 * Rotates the shape matrix clockwise.
 * @param {Array.<Array.<number>>} shape - The shape matrix to be rotated.
 */
function rotateShape(shape) {
    for (let i = 0; i < 3; i++) {
        for (let j = i; j < 3; j++) {
            const temp = shape[i][j];
            shape[i][j] = shape[j][i];
            shape[j][i] = temp;
        }
    }
    for (let i = 0; i < 3; i++) {
        shape[i].reverse();
    }

    return shape;
}

/**
 * Mirrors the shape matrix horizontally.
 * @param {Array.<Array.<number>>} shape - The shape matrix to be mirrored.
 */
function mirrorShape(shape) {
    for (let i = 0; i < 3; i++) {
        shape[i].reverse();
    }
    return shape;
}

document.querySelector('#rotate-shape').addEventListener('click', () => {
    rotateShape(currentShape.shape);
    nextShape(nextShapeGrid);
});

document.querySelector('#flip-shape').addEventListener('click', () => {
    mirrorShape(currentShape.shape);
    nextShape(nextShapeGrid);
});

makeGrid();
updateSeasonAndTime();
nextShapeMatrix.parentElement.addEventListener('mousedown', toggleDrag);

table.addEventListener('mouseover', (event) => {
    if (!isDragged || !event.target.matches('.cell')) return;
    row = parseInt(event.target.dataset.y);
    col = parseInt(event.target.dataset.x);
});

table.addEventListener('mouseup', () => {
    toggleDrag();
    placeShape(row, col);
    nextShape(nextShapeGrid);
});

//----------------------------------------------//
//              Mission functions               //
//----------------------------------------------//

function evaluateMissions() {
    const missionDivs = document.querySelectorAll('.mission.active');
    missionDivs.forEach(mission => {
        const missionNumber = mission.dataset.mission;
        const points = evaluateMission(missionNumber);

        switch (previousSeason) {
            case 'Tavasz':
                springPoints += points;
                break;
            case 'Nyár':
                summerPoints += points;
                break;
            case 'Ősz':
                autumnPoints += points;
                break;
            case 'Tél':
                winterPoints += points;
                break;
            default:
                console.warn(`Unknown season: ${previousSeason}`);
        }

        const pointsDisplay = mission.querySelector('.points-display');
        const currentPoints = parseInt(pointsDisplay.textContent);
        pointsDisplay.textContent = `${currentPoints + points} pont`;
    });

    totalPoints = springPoints + summerPoints + autumnPoints + winterPoints;

    document.querySelector('.spring .points').textContent = springPoints;
    document.querySelector('.summer .points').textContent = summerPoints;
    document.querySelector('.autumn .points').textContent = autumnPoints;
    document.querySelector('.winter .points').textContent = winterPoints;
    document.querySelector('.total .points').textContent = totalPoints;
}

/**
* Evaluates points for a specific mission.
* @param {string} missionNumber - The number identifying the mission.
* @returns {number} The points earned for the mission.
*/
function evaluateMission(missionNumber) {
    switch (missionNumber) {
        case "1": return fasor();
        case "2": return erdoSzele();
        case "3": return krumpliOntozes();
        case "4": return gazdagVaros();
        case "5": return sorhaz();
        case "6": return paratlanSilok();
        case "7": return almosVolgy();
        case "8": return ontozocsatorna();
        case "9": return magusokVolgye();
        case "10": return uresTelek();
        case "11": return hatarvidek();
        case "12": return gazdagVidek();
        default: console.warn(`Function for mission number ${missionNumber} not found.`);
            return 0;
    }
}


/**
 * Calculates and returns points based on the longest vertical line of consecutive 'forest' tiles.
 * 2 Points are earned for each 'forest' tile.
 * @returns {number} The total points earned.
 */
function fasor() {
    let longestLine = 0;

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'forest') {
                let lineLength = 0;
                let k = i;

                while (k < 11 && grid[k][j].dataset.tile === 'forest') {
                    lineLength++;
                    k++;
                }

                if (lineLength > longestLine) {
                    longestLine = lineLength;
                }
            }
        }
    }
    return longestLine * 2;
}

/**
 * Calculates and returns points based on the presence of 'forest' tiles on the edges of the grid.
 * 1 Point is earned for each 'forest' tile on the top, bottom, left, and right edges.
 * @returns {number} The total points earned.
 */
function erdoSzele() {
    let points = 0;

    for (let j = 0; j < grid[0].length; j++) {
        if (grid[0][j].dataset.tile === 'forest') {
            points++;
        }
        if (grid[grid.length - 1][j].dataset.tile === 'forest') {
            points++;
        }
    }

    for (let i = 1; i < grid.length - 1; i++) {
        if (grid[i][0].dataset.tile === 'forest') {
            points++;
        }
        if (grid[i][grid[i].length - 1].dataset.tile === 'forest') {
            points++;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the proximity of 'water' tiles to 'farm' tiles.
 * 2 Points are earned for each 'water' tile adjacent to a 'farm' tile.
 * @returns {number} The total points earned.
 */
function krumpliOntozes() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'water') {
                if (i > 0 && grid[i - 1][j].dataset.tile === 'farm') {
                    points += 2;
                    continue;
                }
                if (i < 10 && grid[i + 1][j].dataset.tile === 'farm') {
                    points += 2;
                    continue;
                }
                if (j > 0 && grid[i][j - 1].dataset.tile === 'farm') {
                    points += 2;
                    continue;
                }
                if (j < 10 && grid[i][j + 1].dataset.tile === 'farm') {
                    points += 2;
                    continue;
                }
            }
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the diversity of terrains around 'town' tiles.
 * 3 Points are earned if there are at least three different terrains surrounding a 'town' tile.
 * @returns {number} The total points earned.
 */
function gazdagVaros() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'town') {
                let uniqueTerrains = new Set();
                
                if (i > 0 && grid[i - 1][j].dataset.tile !== 'empty') uniqueTerrains.add(grid[i - 1][j].dataset.tile);
                if (i < 10 && grid[i + 1][j].dataset.tile !== 'empty') uniqueTerrains.add(grid[i + 1][j].dataset.tile);
                if (j > 0 && grid[i][j - 1].dataset.tile !== 'empty') uniqueTerrains.add(grid[i][j - 1].dataset.tile);
                if (j < 10 && grid[i][j + 1].dataset.tile !== 'empty') uniqueTerrains.add(grid[i][j + 1].dataset.tile);

                if (uniqueTerrains.size >= 3) {
                    points += 3;
                }
            }
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the longest line of consecutive 'town' tiles.
 * 2 Points are earned for each 'town' tile.
 * @returns {number} The total points earned.
 */
function sorhaz() {
    let longestLine = 0;

    for (let i = 0; i < 11; i++) {
        let currentLine = 0;

        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'town') {
                currentLine++;
            } else {
                if (currentLine > longestLine) {
                    longestLine = currentLine;
                }
                currentLine = 0;
            }
        }

        if (currentLine > longestLine) {
            longestLine = currentLine;
        }
    }
    return longestLine * 2;
}

/**
 * Calculates and returns points based on fully occupied columns odd columns.
 * 10 Points are earned for each fully occupied column
 * @returns {number} The total points earned.
 */
function paratlanSilok() {
    let points = 0;

    for (let j = 0; j < 11; j += 2) {
        let isFullColumn = true;

        for (let i = 0; i < 11; i++) {
            if (grid[i][j].dataset.tile === 'empty') {
                isFullColumn = false;
                break;
            }
        }

        if (isFullColumn) {
            points += 10;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the presence of exactly three 'forest' tiles in each row.
 * 4 Points are earned for each row that meets this condition.
 * @returns {number} The total points earned.
 */
function almosVolgy() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        let forestCount = 0;

        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'forest') {
                forestCount++;
            }
        }

        if (forestCount === 3) {
            points += 4;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the equality of 'farm' and 'water' tile counts in each column.
 * 4 Points are earned for each column where the counts are greater than zero.
 * @returns {number} The total points earned.
 */
function ontozocsatorna() {
    let points = 0;

    for (let j = 0; j < 11; j++) {
        let farmCount = 0;
        let waterCount = 0;

        for (let i = 0; i < 11; i++) {
            const tileType = grid[i][j].dataset.tile;

            if (tileType === 'farm') {
                farmCount++;
            } else if (tileType === 'water') {
                waterCount++;
            }
        }

        if (farmCount > 0 && waterCount > 0 && farmCount === waterCount) {
            points += 4;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the proximity of 'mountain' tiles to 'water' tiles.
 * 3 Points are earned for each 'water' tile adjacent to a 'mountain' tile.
 * @returns {number} The total points earned.
 */
function magusokVolgye() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'mountain') {
                if (i > 0 && grid[i - 1][j].dataset.tile === 'water') {
                    points += 3;
                }
                if (i < 10 && grid[i + 1][j].dataset.tile === 'water') {
                    points += 3;
                }
                if (j > 0 && grid[i][j - 1].dataset.tile === 'water') {
                    points += 3;
                }
                if (j < 10 && grid[i][j + 1].dataset.tile === 'water') {
                    points += 3;
                }
            }
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the presence of 'town' tiles adjacent to 'empty' tiles.
 * 2 Points are earned for each 'empty' tile adjacent to a 'town' tile.
 * @returns {number} The total points earned.
 */
function uresTelek() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'empty') {
                if (i > 0 && grid[i - 1][j].dataset.tile === 'town') {
                    points += 2;
                    continue;
                }
                if (i < 10 && grid[i + 1][j].dataset.tile === 'town') {
                    points += 2;
                    continue;
                }
                if (j > 0 && grid[i][j - 1].dataset.tile === 'town') {
                    points += 2;
                    continue;
                }
                if (j < 10 && grid[i][j + 1].dataset.tile === 'town') {
                    points += 2;
                    continue;
                }
            }
        }
    }
    return points;
}

/**
 * Calculates and returns points based on fully occupied rows and columns.
 * 6 Points are earned for each fully occupied row and column.
 * @returns {number} The total points earned.
 */
function hatarvidek() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        let isFullRow = true;
        for (let j = 0; j < 11; j++) {
            if (grid[i][j].dataset.tile === 'empty') {
                isFullRow = false;
                break;
            }
        }
        if (isFullRow) {
            points += 6;
        }
    }

    for (let j = 0; j < 11; j++) {
        let isFullColumn = true;
        for (let i = 0; i < 11; i++) {
            if (grid[i][j].dataset.tile === 'empty') {
                isFullColumn = false;
                break;
            }
        }
        if (isFullColumn) {
            points += 6;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on the diversity of tile types in each row.
 * 4 Points are earned for each row with at least five different tile types.
 * @returns {number} The total points earned.
 */
function gazdagVidek() {
    let points = 0;

    for (let i = 0; i < 11; i++) {
        let uniqueTileTypes = new Set();

        for (let j = 0; j < 11; j++) {
            const tileType = grid[i][j].dataset.tile;

            if (tileType !== 'empty') {
                uniqueTileTypes.add(tileType);
            }
        }

        if (uniqueTileTypes.size >= 5) {
            points += 4;
        }
    }
    return points;
}

/**
 * Calculates and returns points based on 'mountain' tiles surrounded by other tiles on all four sides.
 * 1 Point is earned for each 'mountain' tile meeting this condition.
 * @returns {number} The total points earned.
 */
function hegyKorbe(){
    let extraPoints = 0;

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if (grid[i][j].dataset.tile === 'mountain') {
                
                if (
                    grid[i - 1][j].dataset.tile !== 'empty' &&
                    grid[i + 1][j].dataset.tile !== 'empty' &&
                    grid[i][j - 1].dataset.tile !== 'empty' &&
                    grid[i][j + 1].dataset.tile !== 'empty'
                ) {
                    extraPoints++;
                }
            }
        }
    }
    return extraPoints;
}