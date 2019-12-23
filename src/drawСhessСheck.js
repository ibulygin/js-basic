function drawСhessСheck() {
    let symbol = "#";
    let boardSideSize = 8;
    let board = ""
    for (let j = 0; j < boardSideSize; j ++) {
            for (let i = 0; i < boardSideSize; i++){
                (j + i) % 2 === 0 
                    ? board += symbol
                    : board += " "
            }
            board += "\n";
    }
    console.log(board)
};
drawСhessСheck();