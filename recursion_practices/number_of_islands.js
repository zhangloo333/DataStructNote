/**
 * Created by lee on 8/30/17.
 *
 * this is floodfill
 */

function numberOfIsland(grid) {
    var res = 0;
    var m = grid.length;
        if(m == 0) return 0;
    var n = grid[0].length;

    var visited = new Array(m).fill().map(function () {
        return Array(n).fill
    })
    var visted = Array(m).fill().map(function () {
        return Array(n).fill(false);
    });

}