const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const uroToDollar = 1.1
let op=movements.map((val)=> val*uroToDollar)

console.log(op);


//-----------------------------------------------------------------
let result=[]
for(const value of movements){
    result.push(value * uroToDollar)

}

console.log(result);