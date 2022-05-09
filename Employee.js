"use strict";
exports.__esModule = true;
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeaArray = [];
        this.deletedEmployee = [];
    }
    Employee.prototype.ADD = function (username, id, email, password) {
        var result = {};
        result['username'] = username;
        result['id'] = id;
        result['email'] = email;
        result['password'] = password;
        console.log(result);
        this.employeeaArray.push(result);
        return { employeearray: this.employeeaArray };
    };
    Employee.prototype.DELETE = function (id) {
        var employee;
        for (var i = 0; i < this.employeeaArray.length; i++) {
            if (this.employeeaArray[i].id == id) {
                var result = this.employeeaArray.splice(i, 1);
                this.deletedEmployee.push(result);
                return { deleted: this.deletedEmployee, "message": "successfully deleted" };
            }
        }
        return { "message": "no employees in this array" };
    };
    Employee.prototype.UPDATE = function (id, username, email, password) {
        console.log(id);
        for (var i = 0; i < this.employeeaArray.length; i++) {
            if (this.employeeaArray[i].id == id) {
                var user_name = username ? username : this.employeeaArray[i].username;
                var user_email = email ? email : this.employeeaArray[i].email;
                var user_password = password ? password : this.employeeaArray[i].password;
                this.employeeaArray[i].username = user_name;
                this.employeeaArray[i].email = user_email;
                this.employeeaArray[i].password = user_password;
                return { result: this.employeeaArray[i], "message": "successfully updated user details" };
            }
        }
        return "no user with this id";
    };
    Employee.prototype.RETRIVE = function (id) {
        if (this.deletedEmployee.length) {
            for (var i = 0; i < this.deletedEmployee.length; i++) {
                for (var j = 0; j <= i; j++) {
                    if (this.deletedEmployee[i][j].id == id) {
                        this.employeeaArray.push(this.deletedEmployee[i][j]);
                        var output_result = this.deletedEmployee[i][j];
                        var next_result = this.deletedEmployee.splice([i][j], 1);
                        return { result: output_result, "message": " successfully reterived details" };
                    }
                }
            }
        }
        else {
            return { "message": "no deleted employee details in array" };
        }
    };
    Employee.prototype.DISPLAY = function () {
        var employeeDetails = this.employeeaArray;
        var deletedEmployeeDetails = this.deletedEmployee;
        console.log(employeeDetails);
        console.log(deletedEmployeeDetails);
    };
    return Employee;
}());
var newobj = new Employee();
function switchcase() {
    var userInput = r1.question('Enter your choice {ADD:1,DELETE:2,UPDATE:3,RETRIVE:4,DISPLAY :5}', function (choice) {
        switch (choice) {
            case '1':
                var user_name = r1.question('enter username', function (username) {
                    console.log(username);
                    var user_id = r1.question('enter id', function (id) {
                        console.log("this is id", id);
                        var user_email = r1.question('enter email', function (email) {
                            console.log("thi is email", email);
                            var user_password = r1.question('enter password', function (password) {
                                console.log("this is pasword", password);
                                var added_result = newobj.ADD(username, id, email, password);
                                console.log("added_result is", added_result);
                                switchcase();
                            });
                        });
                    });
                });
                break;
            case '2':
                var deleted_result = r1.question('enter id', function (id) {
                    console.log(id);
                    var result_del = newobj.DELETE(id);
                    console.log(result_del);
                    switchcase();
                });
                break;
            case '3':
                var updated_result = r1.question('enter id', function (id) {
                    console.log(id);
                    var user_id = r1.question('enter username', function (username) {
                        console.log("this is username", username);
                        var user_email = r1.question('enter email', function (email) {
                            console.log("thi is email", email);
                            var user_password = r1.question('enter password', function (password) {
                                console.log("this is pasword", password);
                                var added_result = newobj.UPDATE(id, username, email, password);
                                console.log("updated result is", added_result);
                                switchcase();
                            });
                        });
                    });
                });
                break;
            case '4':
                var retrived_result = r1.question('enter id', function (id) {
                    console.log("this is id");
                    var final_result = newobj.RETRIVE(id);
                    console.log("this is final result", final_result);
                    switchcase();
                });
                break;
            case '5':
                var final_result = newobj.DISPLAY();
                switchcase();
                break;
        }
    });
}
switchcase();
