import * as readline from 'readline';
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
interface EmployeeDetails {
    
     employeeaArray:any[];
     deletedEmployee:any[];

    ADD(username,id,email,password):any;
    DELETE(id:number):any;
    UPDATE(id:number,username?,email?,password?):any;
    RETRIVE(id):any
    DISPLAY():void;

}

class Employee implements EmployeeDetails{

    employeeaArray=[];
    deletedEmployee=[];
    ADD(username: any, id: any, email: any, password: any): any {
        let result = {};
        result['username']=username;
        result['id']=id;
        result['email']=email;
        result['password']=password;
        console.log(result);
        this.employeeaArray.push(result);
        return {employeearray:this.employeeaArray};
    }
    DELETE(id): any {
        let employee;
        for(let i=0;i<this.employeeaArray.length;i++){
            if (this.employeeaArray[i].id ==id){
               let result =  this.employeeaArray.splice(i,1);
               this.deletedEmployee.push(result);
                return {deleted:this.deletedEmployee,"message":"successfully deleted"};
            }      
        }
        return {"message":"no employees in this array"}

    }

    UPDATE(id, username?: any, email?: any, password?: any) {
       

        console.log(id)
        for (let i=0;i<this.employeeaArray.length;i++){
            if (this.employeeaArray[i].id ==id){
                let user_name = username?username:this.employeeaArray[i].username
                let user_email = email?email:this.employeeaArray[i].email
                let user_password = password?password:this.employeeaArray[i].password

                this.employeeaArray[i].username=user_name;
                this.employeeaArray[i].email=user_email;
                this.employeeaArray[i].password=user_password;

                return {result:this.employeeaArray[i],"message":"successfully updated user details"}
              
             }
        }
        return "no user with this id"
    }
    RETRIVE(id: any) {
        if(this.deletedEmployee.length){
            for(let i=0;i<this.deletedEmployee.length;i++){
                for(let j=0;j<=i;j++){
                if(this.deletedEmployee[i][j].id==id){
                    this.employeeaArray.push(this.deletedEmployee[i][j])
                    let output_result = this.deletedEmployee[i][j];
                    let next_result =  this.deletedEmployee.splice([i][j],1)
                    return {result:output_result,"message":" successfully reterived details"}
                }
            }
            }

        }
        else{
            return {"message":"no deleted employee details in array"}
        }
        }
        DISPLAY(): void {
            let employeeDetails = this.employeeaArray;
            let deletedEmployeeDetails = this.deletedEmployee;

            console.log(employeeDetails);
            console.log(deletedEmployeeDetails);
            
        }


}

var newobj =  new Employee();

function switchcase(){
let userInput = r1.question('Enter your choice {ADD:1,DELETE:2,UPDATE:3,RETRIVE:4,DISPLAY :5}', choice => {
  
    switch (choice){
        case '1':
            let user_name =r1.question('enter username',username=>{console.log(username)
                let user_id = r1.question('enter id',id=>{
                    console.log("this is id",id)
                    let user_email =r1.question('enter email',email=>{
                        console.log("thi is email",email)
                        let user_password =r1.question('enter password',password=>{
                            console.log("this is pasword",password)
                            let added_result = newobj.ADD(username,id,email,password);
                            console.log("added_result is",added_result)
                            switchcase();
                        })
                    })
                })})
             break;
        case '2':
            let deleted_result = r1.question('enter id',id=>{console.log(id)
                let result_del = newobj.DELETE(id)
                console.log(result_del);
                switchcase();
            })
            break;
            
        case '3':
            let updated_result =r1.question('enter id',id=>{console.log(id)
                    let user_id = r1.question('enter username',username=>{
                        console.log("this is username",username)
                        let user_email =r1.question('enter email',email=>{
                            console.log("thi is email",email)
                            let user_password =r1.question('enter password',password=>{
                                console.log("this is pasword",password)
                                let added_result = newobj.UPDATE(id,username,email,password);
                                console.log("updated result is",added_result)
                                switchcase();
                            })
    
                        })
                    })})
                    break;

        case '4':
            let retrived_result =r1.question('enter id',id=>{
                console.log("this is id")
               let final_result= newobj.RETRIVE(id)
               console.log("this is final result",final_result); 
               switchcase();
            })
            break;

        case '5':
            let final_result= newobj.DISPLAY();
            switchcase();
            break;
    }  
    });
}
switchcase();

