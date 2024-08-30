

class Graph{
    constructor(){
        this.chessboard=new Map();
    }


    addVertices(size=8){
        for (let i=0; i<size;i++){
            for (let j=0; j<size; j++){
                this.chessboard.set(`${[i,j]}`,[]);
            }
        }
    }

    // Connect all board squares based on knight's move pattern
    addEdges(board=this.chessboard){
        for (let [ pos ] of board) {
            const posArr = pos.split(',');
            const x = parseInt(posArr[0]);
            const y = parseInt(posArr[1]);
            const directions = {
                1: [ x + 1, y + 2 ],
                2: [ x + 2, y + 1 ],
                4: [ x + 2, y - 1 ],
                5: [ x + 1, y - 2 ],
                7: [ x - 1, y - 2 ],
                8: [ x - 2, y - 1 ],
                10: [ x - 2, y + 1 ],
                11: [ x - 1, y + 2 ],
            }
            for (let dir in directions){
                const move=directions[dir].toString();
                if (board.has(move) && !board.get(pos).includes(move)){
                    this.chessboard.get(pos).push(move);
                }
            }
            
        }
    }

}


g = new Graph();

g.addVertices()
g.addEdges();

console.log(g)