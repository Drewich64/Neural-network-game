let dir = {
    forward: "up",
    left: "left",
    right: "right"
};
let trees = [0, 0, 0, 0];
let p = document.querySelector('.movement-direction-sign');

let checkboxes_div = document.querySelector(".checkboxes");
checkboxes_div.addEventListener("click", updateTrees);

function play() {
    let output = Matrix.arrayFrom(nn.feedforward(trees));
    let left = output[0];
    let right = output[1];
    if (left < right && Math.abs(left-right) > 0.2) {
        p.innerHTML = "left";
    }
    if (Math.abs(left - right) <= 0.3 && left >= 0.5 && right >= 0.5) {
        p.innerHTML = "forward";
    }
    if (left > right && Math.abs(left-right) > 0.2) {
        p.innerHTML = "right";
    }
    if (left <= 0.3 && right <= 0.2) {
        p.innerHTML = "stop";
    }
}

function updateTrees() {
    let children = checkboxes_div.children;
    for (let i = 0; i < trees.length; i++) {
        trees[i] = children[i].checked;
    }
    trees = trees.map((x)=>Number(x));
    play();
}