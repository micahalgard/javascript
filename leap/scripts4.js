var Triangle = function (left, right, bottom) {
    this.leftSide = left;
    this.rightSide = right;
    this.bottomSide = bottom;
}

Triangle.prototype.kind = function () {
    hyp = ([this.leftSide, this.rightSide, this.bottomSide]);
    hyp.sort(function(a, b){return b - a});
    if(hyp[0] > hyp[1] + hyp[2]){
        isTriangle = false;
    }else{
        isTriangle = true;
    }
    if(isTriangle) {
        for(i=0; i<hyp.length; i++){
            if(hyp[i] > 0){
                isTriangle = true;
                break;
            }else{
                isTriangle = false;
            }
        }
    }
    if (isTriangle){
        if(this.leftSide == this.rightSide && this.rightSide == this.bottomSide){
            return "equilateral"
        }else if(this.leftSide == this.rightSide || this.leftSide == this.bottomSide || this.rightSide == this.bottomSide){
            return "Isosceles";
        }else if(this.leftSide != this.rightSide && this.rightSide != this.bottomSide ){
            return "scalene"
        }
    }else{
        return "not a triangle"
    }
}

let triangle = new Triangle(2, 9, 0);


console.log(triangle.kind())


