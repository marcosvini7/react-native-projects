function createBoard(rows, columns){
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0
      }
    })
  })
}

function spreadMines(board, mines){
  let minesPlanteds = 0
  while(minesPlanteds < mines){
    const rowSel = parseInt(Math.random() * board.length, 10)
    const columnSel = parseInt(Math.random() * board[0].length, 10)
    if(!board[rowSel][columnSel].mined){
      board[rowSel][columnSel].mined = true
      minesPlanteds++
    }
  }
}

function createMinedBoard(rows, columns, mines){
  let board = createBoard(rows, columns)
  spreadMines(board, mines)
  return board
}

function cloneBoard(board){
  return board.map(rows => rows.map(field => ({...field})))
}

function getNeighbors(board, row, column){
  let neighbors = []
  const rows = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]
  rows.forEach(r => {
    columns.forEach(c => {
      const diferent = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length
      if(diferent && validRow && validColumn){
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}

function safeNeighbood(board, row, column){
  let safe = true
  getNeighbors(board, row, column).forEach(n => {
    if(n.mined) safe = false
  })
  return safe
}

function openField(board, row, column){
  const field = board[row][column]
  const neighbors = getNeighbors(board, row, column)
  if(!field.opened){
    field.opened = true
    if(field.flagged){
      field.flagged = false
    }
    if(field.mined){
      field.exploded = true
    } else if(safeNeighbood(board, row, column)){
      neighbors.forEach(n => openField(board, n.row, n.column))
    } else {
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

function selectField(board, row, column){
  const field = board[row][column]
  if(!field.opened && ((!field.flagged && info.flags(board) !== 0) || field.flagged)){
    field.flagged = !field.flagged
  }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)
const wonGame = board => fields(board).filter(field => pendding(field)).length === 0
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

const info = { 
  flags: board => fields(board).filter(field => field.mined).length - 
    fields(board).filter(field => field.flagged).length,
  blocks: board => fields(board).filter(field => !field.opened).length,
  openedBlocks: board => fields(board).filter(field => field.opened).length,
}

export {
  createMinedBoard,
  cloneBoard,
  openField,
  selectField,
  hadExplosion,
  wonGame,
  showMines,
  info
}
