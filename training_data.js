function makeData(arr, input_num, label_num) {
    let res = [];
    for (let i = 0; i < arr.length/(input_num+label_num); i++) {
        res.push([Matrix.vectorFrom(arr.slice(i*(input_num+label_num), i*(input_num+label_num)+input_num)), Matrix.vectorFrom(arr.slice(i*(input_num+label_num)+input_num, i*(input_num+label_num)+input_num+label_num))]);

    }
    return res;
}

let data = [
    1, 0, 0, 0,
    1, 0.5,
    0, 0, 0, 1,
    0.5, 1,
    0, 0, 0, 0,
    1, 1,
    1, 0, 0, 1,
    0, 0,
    0, 1, 0, 0,
    1, 0.5,
    0, 0, 1, 0,
    0.5, 1
];
let training_data = makeData(data, 4, 2);



