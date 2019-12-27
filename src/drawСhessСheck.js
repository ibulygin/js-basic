function drawСhessСheck() {
    const blackCell = "#";
    const whiteCell = " ";
    const boardSideSize = 8;

    let board = "";

    for (let j = 0; j < boardSideSize; j++) {
        for (let i = 0; i < boardSideSize; i++) {
            if (!((j + i) % 2)) {
                board += blackCell;
            }
            board += whiteCell;
        }
        board += "\n";
    }
    console.log(board)
};
drawСhessСheck();