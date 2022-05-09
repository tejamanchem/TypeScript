
interface Shape{

    Triangle(base:number,height:number):number;

    Circle(radius:number):number;

    Square(area:number):number;

    Rectangle(length:number,width:number):number; 

    Parallelogram(base:number,verticalHeight:number):number;
}

class Areas implements Shape{
 
    Triangle(base: number, height: number): number {
        var areaOfTriangle = 1/2*base*height;
        return areaOfTriangle
    }
    Circle(radius: number): number {
        var areaOfCircle= (3.14)*radius*radius;

        return areaOfCircle;
    }
    Square(area:number):number{
        var areaOfSquare = area*area;
        return areaOfSquare;
    }
    Rectangle(length: number, width: number): number {
        var areaOfRectangle = length*width;
        return areaOfRectangle;
    }

    Parallelogram(base: number, verticalHeight: number): number {
         var areaOfParallelogram = base * verticalHeight;
         return areaOfParallelogram;
    }

}

let myTask:any = new Areas();
let result_1=myTask.Triangle(12,13)
let result_2=myTask.Circle(6)
let result_3=myTask.Square(14)
let result_4=myTask.Rectangle(6,8)
let result_5=myTask.Parallelogram(10,16)

let arrayOfREsult = [result_1,result_2,result_3,result_4,result_5];
console.log(arrayOfREsult);