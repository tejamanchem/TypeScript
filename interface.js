var Areas = /** @class */ (function () {
    function Areas() {
    }
    Areas.prototype.Triangle = function (base, height) {
        var areaOfTriangle = 1 / 2 * base * height;
        return areaOfTriangle;
    };
    Areas.prototype.Circle = function (radius) {
        var areaOfCircle = (3.14) * radius * radius;
        return areaOfCircle;
    };
    Areas.prototype.Square = function (area) {
        var areaOfSquare = area * area;
        return areaOfSquare;
    };
    Areas.prototype.Rectangle = function (length, width) {
        var areaOfRectangle = length * width;
        return areaOfRectangle;
    };
    Areas.prototype.Parallelogram = function (base, verticalHeight) {
        var areaOfParallelogram = base * verticalHeight;
        return areaOfParallelogram;
    };
    return Areas;
}());
var myTask = new Areas();
var result_1 = myTask.Triangle(12, 13);
var result_2 = myTask.Circle(6);
var result_3 = myTask.Square(14);
var result_4 = myTask.Rectangle(6, 8);
var result_5 = myTask.Parallelogram(10, 16);
var arrayOfREsult = [result_1, result_2, result_3, result_4, result_5];
console.log(arrayOfREsult);
