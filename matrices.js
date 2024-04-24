class Matrix {
    constructor(args) {
        switch(args.length) {
            case(1): // Init with array
                if (typeof(args) != "object") break;
                this.arr = args[0];
                this.rows = args[0].length;
                this.cols = args[0][0].length;
            break;
            case(3): // Init with number of rows, cols and value
                this.rows = args[0];
                this.cols = args[1];
                this.arr = [];
                if (args[2] == "random") {
                    this.minitRandom();
                    break;
                }
                this.minitVal(args[2]);
            break;
        }
    }

    form(text, n) {
        if (typeof(text) != "string") text = String(text);
        let l = text.length;
        if (text.length == n) {
            return text;
        }
        if (text.length < n) {
            let res = text.split("");
            for (let i = 0; i < n-text.length; i++) {
                res.push(" ");
            }
            return res.join('');
        }
        if (text.length > n) {
            let res = text.split("");
            return res.splice(0, n).join('');
        }
    }

    print() {
        for (let i = 0; i < this.rows; i++) {
            let outstr = "";
            for (let j = 0; j < this.cols; j++) {
                outstr += this.this.form(this.arr[i][j], 4) + " ";
            }
            console.log(outstr);
        }
        console.log("");
    }

    minit(init_arr) {
        this.arr = init_arr;
    }

    minitVal(val) {
        for (let i = 0; i < this.rows; i++) {
        this.arr.push([]);
            for (let j = 0; j < this.cols; j++) {
                this.arr[i][j] = val;
            }
        }
    }

    minitRandom() {
        for (let i = 0; i < this.rows; i++) {
            this.arr.push([]);
                for (let j = 0; j < this.cols; j++) {
                    this.arr[i][j] = Math.random();
                }
            }
    }

    madd(matrix2) {

        if (this.rows != matrix2.rows || this.cols != matrix2.cols) {
            console.log("Can't add matrices of different size:");
            console.log(this, matrix2);
            return null;
        }

        let result = new Matrix([this.rows, this.cols, 0]);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.arr[i][j] = this.arr[i][j] + matrix2.arr[i][j];
            }
        }

        return result;
    }

    mmul(m2) {
        if (this.cols != m2.rows) {
            console.log("Can't multiply these matrices.");
            return;
        }

        let result = new Matrix([this.rows, m2.cols, 0]);

        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                let term = 0;
                for (let k = 0; k < this.cols; k++) {
                    term += this.arr[i][k] * m2.arr[k][j];
                }
                result.arr[i][j] = term;
            }
        }

        return result;
    }

    transp() {
        let n = new Matrix([this.cols, this.rows, 0]);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                n.arr[j][i] = this.arr[i][j];
            }
        }
        return n;
    }

    map(func) {
        let res = new Matrix([this.rows, this.cols, 0]);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                res.arr[i][j] = func(this.arr[i][j]);
            }
        }
        return res;
    }

    static vectorFrom(arr) {
        let vec = new Matrix([arr.length, 1, 0]);
        for (let i = 0; i < arr.length; i++) {
            vec.arr[i][0] = arr[i];
        }
        return vec;
    }

    expmmul(m) {
        if (this.cols != 1 || m.rows != 1) return;
        let res = new Matrix([this.rows, m.cols, 0]);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                res.arr[i][j] = this.arr[i][0] * m.arr[0][j];
            }
        }
        return res;
    }

    byv(vector) {
        let res = new Matrix([this.rows, this.cols, 0]);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                res.arr[i][j] = this.arr[i][j]*vector.arr[i][0];
            }
        }
        return res;
    }
    static arrayFrom(vec) {
        let res = vec.transp().arr[0];
        // res = res.map((x)=>Number(x));
        return res;
    }

    static printCalc(arr) {
        let out = [];
        let center = Math.ceil(arr[0].rows/2)-1;
        for (let i = 0; i < arr[0].rows; i++) {
            out.push([]);
        }
        for (let i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < arr[0].rows; j++) {
                    out[i][j] = arr[i][j];
                }
            } else {
                for (let j = 0; j < arr[0].rows; j++) {
                    if (j == center) out [i][j] = arr[i]; continue;
                    out[i][j] = ' ';
                }
            }
        }
        for (let i = 0; i < out[0].length; i++) {
            console.log(out[i].join(''));
        }
    }

    static printExpression(arr) {
        if (typeof(arr) != "object") return;
        for (let m = 0; m < arr.length; m++) {

        }

        for (let row = 0; row < max_row; row++) {

        }
        for (let i = 0; i < arr.length; i++) {
            
        }
    }
}