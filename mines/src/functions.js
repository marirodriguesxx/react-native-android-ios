const createBoard = (rowna, columns) => {
    //map ignora os elementos e considera os indices
    return Array(rows).fill(0).map((_,row) =>{ //percorrendo a slinhas
        return Array(columns).fill(0).map((_,column) => {
            //construindo um objeto de forma literal {}
            //cada linha e coluna tera um objeto desse
            return {
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,

            }
        })
    })
}

// funcao para distribuir as minas no campo
//recebe o tabuleiro e a quantidade de minas a serem distribuidas
const spreadMines = (board, minesAmount) => {
    const rows = board.lenght
    const cols = board[0].lenght

    let minesPlanted = 0

    while (minesPlanted < minesAmount){
        // gerando numeros aleatorios na base decimal (segundo parametro do parseInt)
        const rowSel = parseInt(Math.random() * rows, 10)
        const colSel = parseInt(Math.random() * cols, 10)

        //se nao ha mina nessa posicao
        if(!board[rowSel][colSel].mined){
            board[rowSel][colSel].mined = true
            minesPlanted ++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board,minesAmount) // passagem por referencia automatica
    return board
}

export { createMinedBoard }

// em js, todas passagens sao por referencia?
// Primitives are passed by value, and Objects are passed by "copy of a reference".
//https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference