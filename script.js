const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "  WWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];


const maze = document.getElementById("maze")






for (let i = 0; i < map.length; i++) {
    var row = map[i];
    let mazeboard = document.createElement("div")
    mazeboard.classList.add("mazeRow")

    for (let j = 0; j < map[i].length; j++) {
        let wall = document.createElement("div")
        wall.dataset.rowIndex = i;
        wall.dataset.wallIndex = j;
        mazeboard.appendChild(wall)

        switch (row[j]) {
            case "W":
                wall.classList.add("borderWall")
                wall.dataset.cellType = "border";
                break;

            case "S":
                wall.setAttribute("id", "start")
                wall.dataset.cellType = "start";
                break;

            case " ":
                wall.classList.add("blankSpace");
                wall.dataset.cellType = "floor";

            case "F":
                wall.setAttribute("id", "finish");
                wall.dataset.cellType = "end"
                break;
        }


    }

    maze.appendChild(mazeboard);


}