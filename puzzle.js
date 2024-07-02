let rows = 3;
let cols = 3;

let currTile;
let otherTile;
let turns = 0;
let imgOrder = ["img-2.jpg", "img-7.jpg", "img-4.jpg", "img-8.jpg", "img-1.jpg", "img-6.jpg", "img-3.jpg", "img-5.jpg", "img-9.jpg"];
let imgOrder1 = [];

start()
function start() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let tile = document.createElement("img");
            tile.id = i.toString() + "-" + j.toString();
            let img = imgOrder.shift();
            imgOrder1.push(img);
            tile.src = img;
            imgOrder.reverse();
            for (let k = 0; k < imgOrder.length; k++) {
                let l = Math.floor(Math.random() * imgOrder.length);
                let tmp = imgOrder[k];
                imgOrder[k] = imgOrder[l];
                imgOrder[l] = tmp;
            }
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
        }
    }



}

    function dragStart() {
        currTile = this;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {

    }

    function dragDrop() {
        otherTile = this;
    }

    function dragEnd() {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;
        turns++
        document.getElementById("turns").innerText = turns;
        if (turns > 10) {
            alert("GAME OVER!")
            window.location.reload();
        }
    }

    function reset() {
        window.location.reload();
    }





