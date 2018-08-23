var Triangle = function (left, right, bottom) {
    this.leftSide = left;
    this.rightSide = right;
    this.bottomSide = bottom;
}

Triangle.prototype.kind = function () {
    hyp = ([this.leftSide, this.rightSide, this.bottomSide]);
    hyp.sort();
    hyp.reverse();
    return hyp;
}


    let triangle = new Triangle(2, 11, 3);

    console.log(triangle.kind());


    // if(this.leftSide > 0 && this.rightSide > 0 && this.bottomSide > 0){
    //     tri = true;
    // }else {
    //     tri = false;
    // }
    // if(tri == true){
    //     if(this.leftSide > this.rightSide && this.leftSide > this.buttonSide){
    //         if(this.rightSide + this.buttonSide >= this.leftSide){
    //             tri = true;
    //         }else{
    //             tri = false;
    //         }
    //     }
    //     if(this.leftSide + this.rightSide >= this.bottomSide || this.bottomSide + this.leftSide >= this.rightSide || this.bottomSide + this.rightSide >= this.leftSide ){
    //         tri = true;
    //     }else{
    //         tri = false;
    //     }
    // }
    // return tri;

    // if (tri == true){
    //     if(this.leftSide == this.rightSide && this.rightSide == this.bottomSide){
    //         return "equilateral"
    //     }else if(this.leftSide == this.rightSide || this.leftSide == this.bottomSide || this.rightSide == this.bottomSide){
    //         return "Isosceles";
    //     }else if(this.leftSide != this.rightSide && this.rightSide != this.bottomSide ){
    //         return "scalene"
    //     }else{
    //         return "not a triangle "
    //     }
    // }else{
    //     return "not a triangle"
    // }