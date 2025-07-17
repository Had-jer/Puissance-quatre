class forceFour {
    constructor(rows, columns) {
        this.playerGreen = "G";
        this.playerRed = "R";
        this.currPlayer = this.playerRed;
        this.gameOver = false;
        this.board = [];
        this.rows = rows;
        this.columns = columns;
        this.currColumns = [];
        this.color = 'red';
        

        this.setGame();
    }

     setGame(){
        this.board = [];
        this.currColumns = [5, 5, 5, 5, 5, 5, 5];
        const boardElement = document.getElementById("board");

        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.columns; c++) {
                row.push(' ');
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                tile.addEventListener("click", () => this.setPiece(row, c));
                boardElement.append(tile);
            }
            this.board.push(row);
        }

     }
    
    setPiece(r, c){
        if (this.gameOver) {
            return;
        }
        
        let row = this.currColumns[c];
        if (row < 0) {
            return;
        }
    this.board[row][c] = this.currPlayer;
        let tile= document.getElementById(row.toString() + "-" + c.toString());
        if (this.currPlayer == this.playerRed) {
        //   this.red=  tile.classList.add("red-piece")
          tile.style.backgroundColor = this.color;
            this.currPlayer = this.playerGreen                                                                                                 ;
        } else {
            tile.classList.add("green-piece");
            this.currPlayer = this.playerRed;
        }
    
        row -= 1;
        this.currColumns[c] = row;
        // console.log('jjfkfjrfk');
    
        this.checkWinner();
    }

    
    
        checkWinner() {
            const rows = this.rows;
            const columns = this.columns;
        
            // horizontal
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns - 3; c++) {
                    if (this.board[r][c] != ' ') {
                        if (this.board[r][c] == this.board[r][c + 1] && this.board[r][c + 1] == this.board[r][c + 2] && this.board[r][c + 2] == this.board[r][c + 3]) {
                            this.setWinner(r, c);
                            return;
                        }
                    }
                }
            }
        
            // vertical
            for (let c = 0; c < columns; c++) {
                for (let r = 0; r < rows - 3; r++) {
                    if (this.board[r][c] != ' ') {
                        if (this.board[r][c] == this.board[r + 1][c] && this.board[r + 1][c] == this.board[r + 2][c] && this.board[r + 2][c] == this.board[r + 3][c]) {
                            this.setWinner(r, c);
                            return;
                        }
                    }
                }
            }
        
            // anti diagonal
            for (let r = 0; r < rows - 3; r++) {
                for (let c = 0; c < columns - 3; c++) {
                    if (this.board[r][c] != ' ') {
                        if (this.board[r][c] == this.board[r + 1][c + 1] && this.board[r + 1][c + 1] == this.board[r + 2][c + 2] && this.board[r + 2][c + 2] == this.board[r + 3][c + 3]) {
                            this.setWinner(r, c);
                            return;
                        }
                    }
                }
            }
        
            // diagonal
            for (let r = 3; r < rows; r++) {
                for (let c = 0; c < columns - 3; c++) {
                    if (this.board[r][c] != ' ') {
                        if (this.board[r][c] == this.board[r - 1][c + 1] && this.board[r - 1][c + 1] == this.board[r - 2][c + 2] && this.board[r - 2][c + 2] == this.board[r - 3][c + 3]) {
                            this.setWinner(r, c);
                            return;
                        }
                    }
                }
            }
        }
        
        setWinner(r, c) {
            let winner = document.getElementById("winner");
            if (this.board[r][c] == this.playerRed) {
                // winner.innerText = "Red Wins";
                alert(this.color + " "+'WINS');
            } else {
                // winner.innerText = "Green Wins";
                alert('GREEN WINS');

            }
            this.gameOver = true;
        }
    
        resetGame() {
            this.gameOver = false;
            this.currPlayer = this.playerGreen;
            this.currColumns = [5, 5, 5, 5, 5, 5, 5];
            this.board = [];
        
            const boardElement = document.getElementById("board");
            boardElement.innerHTML = "";
        
            this.setGame();
        }
        colorChoice(e) {
            let red = document.querySelectorAll(".red-piece")
            this.color = e.target.value;
            for (let a = 0; a < red.length;a++) {
            red[a].style.backgroundColor = e.target.value;
            }
        } 
        
    //réduire te agrandir la taille de la grid
//     smaller(){
//     if (this.rows > 4 && this.columns > 4) {
//         this.rows--;
//         this.columns--;
//         this.resetGame();
//     }
// }

//         bigger() {
//     if (this.rows < 8 && this.columns < 8) {
//         this.rows++;
//         this.columns++;
//         this.resetGame();
//     }
// }
}


    window.onload = function() {
    const connectFour = new forceFour(6, 7);
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => connectFour.resetGame());
    const select = document.getElementById('color-select');
    select.addEventListener("change",  (e) => connectFour.colorChoice(e));

      
    // const smallerButton = document.getElementById('smaller');
    // smallerButton.addEventListener('click', () => connectFour.smaller());

    // const biggerButton = document.getElementById('bigger');
    // biggerButton.addEventListener('click', () => connectFour.bigger());

}