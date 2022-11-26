const ROW = 19;     // Grid ..
const COL = 9;      // .. size
const SQ = 6;       // square size
const VACANT = 13;  // color for blank squares

// Pieces
const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
]
const J = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
]
const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
]
const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
]
const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
]
const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
]
const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
]

/*/const PIECES = [
    [Z, 2],
    [S, 3],
    [T, 4],
    [O, 5],
    [L, 6],
    [I, 7],
    [J, 8]
]*/
const PIECES = [I,J,L,O,S,T,Z]
const COLOR = [2,3,4,5,6,7,8]

let picture: Image = null
let grid: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
// Piece currently in use
let currPiece: number[][][]

/////////////////////////////////////////////////////////////////////////////
// Display the minimal unit of a piece
function drawSquare(x: number, y: number, color: number) {
    picture.fillRect(x * SQ, y * SQ, SQ, SQ, color)
}
// The grid is composed of 10x20 squares
function drawGrid() {
    for (let row = 0; row <= ROW; row++) {
        for (let col = 0; col <= COL; col++) {
            drawSquare(col, row, grid[row][col])
        }
    }
}
// Use the correct piece array for drawing with squares
function drawPiece(piece: number[][], x: number, y: number, color: number) {
    for (let row = 0; row <= piece.length-1; row++) {
        for (let col = 0; col <= piece[row].length-1; col++) {
            if (piece[row][col] == 1) {
                drawSquare(x + col, y + row, color)
            }
        }
    }
}
// Check if a piece can be moved
function collision(piece: number[][], x: number, y: number) {
    for (let row = 0; row <= piece.length - 1; row++) {
        for (let col = 0; col <= piece[row].length - 1; col++) {

            if (piece[row][col] == 0) {continue}

            if (pieceY < 0) {continue}

            if ((pieceX + col + x < 0) || (pieceX + col + x > COL) || (pieceY + row + y > ROW)) {return true}
            
            if (grid[pieceY + row + y][pieceX + col + x] != VACANT) {return true}
        }
    }
    return false
}
// Insert the piece in the grid
function lockPiece(piece: number[][]) {
    for (let row = 0; row <= piece.length - 1; row++) {
        for (let col = 0; col <= piece[row].length - 1; col++) {
            if (piece[row][col] == 1) {
                grid[pieceY + row][pieceX + col] = pieceColor
            }
        }
    }
    drawGrid()
}
// Check if lines are completed
function checkLine() {
    let line: number
    let checkAgain: boolean = true
    while (checkAgain == true) {
        checkAgain = false
        for (let row = ROW; row >= 0; row--) {
            line = 1
            for (let col = 0; col <= COL; col++) {
                if (grid[row][col] == VACANT) {line = 0}
            }
            if (line == 1) {
                info.changeScoreBy(1)
                for (let r = row; r >= 1; r--) {
                    for (let c = 0; c <= COL; c++) {
                        grid[r][c] = grid[r-1][c]
                    }
                }
                grid[0] = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
                checkAgain = true
            }
        }
    }
    drawGrid()
}
// Create a new piece
function newPiece() {
    rand = Math.randomRange(0, 6)
    currPiece = PIECES[rand]
    pieceX = 3
    pieceY = -2
    pieceColor = COLOR[rand]
    pieceRot = 0
    drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
}

// Controls
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let newRot: number
    if (pieceRot != 3) {
        newRot = pieceRot + 1
    } else {
        newRot = 0
    }
    if (collision(currPiece[newRot], 0, 0)) {

    } else {        
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceRot = newRot
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let newRot: number
    if (pieceRot != 0) {
        newRot = pieceRot - 1
    } else {
        newRot = 3
    }
    if (collision(currPiece[newRot], 0, 0)) {

    } else {        
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceRot = newRot
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (collision(currPiece[pieceRot], 0, 1)) {

    } else {
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceY++
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (collision(currPiece[pieceRot], 0, 1)) {

    } else {
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceY++
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (collision(currPiece[pieceRot], -1, 0)) {

    } else {
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceX--
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (collision(currPiece[pieceRot], 1, 0)) {

    } else {
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceX++
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})

game.onUpdateInterval(500, function () {
    if (collision(currPiece[pieceRot], 0, 1)) {
        if (pieceY > 0) {
            lockPiece(currPiece[pieceRot])
            checkLine()
            newPiece()
        }else{
            game.over(false)
        }
    } else {
        drawPiece(currPiece[pieceRot], pieceX, pieceY, VACANT)
        pieceY++
        drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
    }
})
game.onUpdate(function () {

})

scene.setBackgroundColor(11)
picture = image.create(60, 120)
picture.fill(13)
scene.setBackgroundImage(picture)

// Create the grid with blank squares
for (let r = 0; r <= ROW; r++) {
    for (let c = 0; c <= COL; c++) {
        grid[r][c] = VACANT
    }
}
drawGrid()

let rand: number = Math.randomRange(0, 6)
let pieceX: number = 3
let pieceY: number = -2
let pieceColor: number = COLOR[rand]
let pieceRot: number = 0
currPiece = PIECES[rand]
drawPiece(currPiece[pieceRot], pieceX, pieceY, pieceColor)
