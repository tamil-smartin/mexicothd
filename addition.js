console.log("sum of two numbers");

class addition {
    constructor() {
        this.num1 = 2;
        this.num2 = 3;
    }
    sumof2Num() {

        return !(Number.isNaN(this.num1) || Number.isNan(this.num2)) ? this.num1 + this.num2 : '';
    }
}
export default new addition();