/**
 * Created by lee on 4/30/17.
 */
class Soulution {
    public void solveSudoKu(char[][] board) {
        if (board == null) return;
        if (board.length != 9 || board[0].length != 9) return;
        helper(board);
    }

    private boolean helper(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') continue;
                for (char c = '1'; c <= '9'; c++) {
                    board[i][j] = c;
                    if (isValid(board, i, j, c)) {
                        if (helper(board)) return true;
                    }
                }
                board[i][j] = '.';
                return false;
            }
        }
        return true;
    }

    private boolean isValid(char[][] board, int row, int col, char c) {
        // validate row;
        for (int i = 0; i < 9; i++) {
            if (i != row && board[i][col] == c) return false;
        }
        // validate coloum;
        for (int i = 0; i < 9; i++) {
            if (i != col && board[row][i] == c) return false;
        }

        //validate submatrix
        int rowBlock = row / 3 * 3, colBlock = col / 3 * 3;
        for (int i = rowBlock; i < rowBlock + 3; i++) {
            for (int j = colBlock; j < colBlock + 3; j++) {
                if (i == row && j == col) continue;
                if (board[i][j] == c) return false;
            }
        }
        return true;

    }
}


