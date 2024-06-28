import { useState } from 'react';
import './MazeGrid.css';
import About from './About';

export default function MazeGrid() {

  const [rowNr, setRowNr] = useState(10);
  const [columnNr, setColumnNr] = useState(10);
  const [maze, setMaze] = useState(()=>generateMaze(rowNr,columnNr));
  const [errMessageRow, setErrMessageRow] = useState();
  const [errMessageColumn, setErrMessageColumn] = useState();
  const [timeoutIds, setTimeOutIds] = useState([]);
  const [speed, setSpeed] = useState(25);
  
  const adjustRowNr = (value) => {
    if(!(value.target.validity.valueMissing && value.target.validity.badInput)){
      const number = Math.round(value.target.value)  
      if( number>=4 && number <= 50 && !(number%2) ){
        setRowNr(number)
        setErrMessageRow('')
      } else {
        setErrMessageRow('Wrong number! Applied: '+ rowNr)
      }
    } else {
      setErrMessageRow('Missing number! Applied: '+ rowNr)
    }
  }

  const adjustColumnNr = (value) => {
    if(!(value.target.validity.valueMissing && value.target.validity.badInput)){
      const number = Math.round(value.target.value)  
      if( number>=4 && number <= 50 && !(number%2) ){
        setColumnNr(number)
        setErrMessageColumn('')
      } else {
        setErrMessageColumn('Wrong number! Applied: '+ columnNr)
      }
    } else {
      setErrMessageColumn('Missing number! Applied: '+ columnNr)
    }
  }

  const adjustMaze = () => {
    timeoutIds.forEach(clearTimeout)
    setTimeOutIds([])
    setMaze(generateMaze(rowNr,columnNr));
  } 

  const adjustSpeed = (value) => setSpeed(200-value.target.valueAsNumber)

  function generateMaze(height, width){
    let matrix=[];
    for (let i=0; i < height; i++){
      let row = [];
      for (let j=0; j < width; j++){
        row.push('wall')
      }
      matrix.push(row);
    }

    const dirs = [[0, 1],[1, 0],[0, -1],[-1, 0]]

    function isCellValid(x, y) {
      return y >= 0 && x >= 0 && x < width && y < height && matrix[y][x] === 'wall'
    }

    function carvePath(x, y) {
      matrix[y][x] = 'path'
      const directions = dirs.sort(() => Math.random() - 0.5);

      for (let [dx, dy] of directions){
        const nx = x + dx * 2;
        const ny = y + dy * 2;
        if (isCellValid(nx, ny)){
          matrix[y + dy][x + dx] = 'path';
          carvePath(nx, ny);
        }
      }
    }
    carvePath(1, 1)

    matrix[1][0] = 'start'
    matrix[height-2][width-1] = 'end';

    return (matrix);
  }

  function bfs(startNode, height, width){
    let queu = [startNode];
    let visited = new Set(`${startNode[0]},${startNode[1]}`);

    function visitedCell([x, y]){
      setMaze(prevMaze => prevMaze.map((row, rowIndex)=>row.map((cell,cellIndex)=> {
        return (rowIndex === y && cellIndex === x) ? cell === 'end' ? 'end' : 'visited-bfs' : cell
      })))
      return (maze[y][x] === 'end') ? true : false
    }

    function step(){
      if (!queu.length) return
      const [x, y] = queu.shift()
      const dirs = [[0, 1],[1, 0],[0, -1],[-1, 0]]
      for (const [dx, dy] of dirs){
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited.has(`${nx},${ny}`)){
          visited.add(`${nx},${ny}`)
          if (maze[ny][nx] === 'path' || maze[ny][nx] === 'end'){
            if (visitedCell([nx, ny])){
              return true
            }
            queu.push([nx, ny])
          }
        }
      }
      const timeoutId = setTimeout(step, speed)
      setTimeOutIds((previousTimeoutIds) => [...previousTimeoutIds, timeoutId])
    }
    step()
    return false
  }

  function dfs(startNode, height, width){
    let stack = [startNode];
    let visited = new Set(`${startNode[0]},${startNode[1]}`);

    function visitedCell([x, y]){
      setMaze(prevMaze => prevMaze.map((row, rowIndex)=>row.map((cell,cellIndex)=> {
        return (rowIndex === y && cellIndex === x) ? cell === 'end' ? 'end' : 'visited-dfs' : cell
      })))
      return (maze[y][x] === 'end') ? true : false
    }

    function step(){
      if (!stack.length) return
      const [x, y] = stack.pop()
      const dirs = [[0, 1],[1, 0],[0, -1],[-1, 0]]
      for (const [dx, dy] of dirs){
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited.has(`${nx},${ny}`)){
          visited.add(`${nx},${ny}`)
          if (maze[ny][nx] === 'path' || maze[ny][nx] === 'end'){
            if (visitedCell([nx, ny])){
              return true
            }
            stack.push([nx, ny])
          }
        }
      }
      const timeoutId = setTimeout(step, speed)
      setTimeOutIds((previousTimeoutIds) => [...previousTimeoutIds, timeoutId])
    }
    step()
    return false
  }

  return (
    <main>
      <About />
      <div className='maze-grid'>
        <div className='inputs'>
          <div className='rownr'>
            rowNr: <input className='border-2' type='number' placeholder={rowNr} size='10' maxlength="3" onChange={adjustRowNr}/> 
            <p className='error'>{errMessageRow}</p>
          </div>
          <div className='columnnr'>
            columnNr: <input className='border-2' type='number' placeholder={columnNr} size='10' maxlength="3" onChange={adjustColumnNr}/> 
            <p className='error'>{errMessageColumn}</p>
          </div>
          <div className="slidecontainer">
            Speed of search: <input type="range" onChange={adjustSpeed} min="0" max="200" step="25" className="slider" id="myRange"/>
            <p className='error'>{`${Math.round(speed)} ms`}</p>
          </div>
        </div>
        <div className='buttons-maze'>
          <div className='buttons'>
            <button className='maze-button' onClick={adjustMaze}>Refresh Maze</button>
            <button className='maze-button' onClick={()=>bfs([1,0], rowNr, columnNr)}>Breadth-First Search</button>
            <button className='maze-button' onClick={()=>dfs([1,0], rowNr, columnNr)}>Depth-First Search</button>
          </div>
          </div>
          <div className='maze'>
            {maze.map((row, rowIndex)=>(
                <div key={`row_${rowIndex}`} className='row'>
                  {row.map((cell, cellIndex)=>(
                      <div key={`row_${rowIndex}_column_${cellIndex}`} className={`cell ${cell}`}></div>
                    )
                  )}
                </div>
              )
            )}  
          </div>

        
      </div>
    </main>
  )
}


