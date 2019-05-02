// alert("hai");
console.log("test");
var name = 'Dinesh';
console.log(name)
var newObj = {
    name : 'Vignesh',
    age : 20
}
console.log(newObj)

var newArr = [
    {
        name : 'Rajiv',
        age : 20
    },
    {
        name : 'Karthick',
        age : 22
    },{
        name : 'Aravind',
        age : 27
    }
]
console.log(newArr)
console.log(newArr.length);

for(var i=0;i<3;i++){
    if(newArr[i].age == 20){
        console.log(newArr[i].name);
    }    
    else{
        console.log(newArr[i].name + "test");
    }
}


// newArr.push(newObj);
// newArr.unshift(newObj);
// newArr.splice(2,1,newObj);

// newArr.pop();
// newArr.shift();
// delete newArr[1];
console.log(newArr);