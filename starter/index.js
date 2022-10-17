// let instance = null;

// class Car {
//   constructor(doors, engine, color) {
//     if (!instance) {
//       this.doors = doors;
//       this.engine = engine;
//       this.color = color;
//       instance = this;
//     } else {
//       return instance;
//     }
   
//   }
// }


// // console.log(cvx);

// class CarFactory {
//     createCar(type){
//   switch (type) {
//     case "civic":
//       return new Car(4,"V6","grey");
//       case "honda":
//         return new Car(2,"v8","red");
//   }
//     }
//   }


//   class Suv {
//     constructor(doors, engine, color) {
      
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
       
//       }
     
//     }

// let carMixin = {
// revEngine(){
//     console.log(`the ${this.engine} is doing vroom vroom`);
// }
// };
// class SuvFactory{
//     createCar(type){
//   switch (type) {
//     case "cx5":
//       return new Suv(4,"V6","grey");
//       case "sante fa":
//         return new Suv(2,"v8","red");
//   }


//     }
//   }
//   const carFactory = new CarFactory();
//   const suvFactory = new SuvFactory();

//   //abstract factory
//   const autoManufacture = (type,model)=>{

//     switch (type) {
//         case 'car':
//         return carFactory.createCar(model);

//         case 'suv':
//         return suvFactory.createCar(model);
            
            
//     }
//   };
  
// const cvx =  autoManufacture('suv','cx5');
//       console.log(cvx);


// const list = Object.create({});
// list.collection = "array";
// list.object = "Dictionary-like";
// list.pointers = "Variables";
// list.encapsulation = "class";
// list.behaivor = "mean ass nigga";



// function myName(object) {
//     console.log(object);
// }

//     myName(list);




// const listType =  {...list};
// const listTpr = listType.object;
// console.log(listType);
// console.log(listTpr);



// function favFood(response) {
//     console.log("Your favourite food is Pizza");
// }


// favFood();
// function faFood(response="Please add your favourite food") {
//     if (response === undefined) {
//         console.log(response);
//     }else if(response == undefined) {console.log(`Your favourite food is ${response}`)};

// }

// faFood("mngqusho");

// // const cvx =  autoManufacture('suv','cx5');
// // console.log(cvx);
// Object.assign(Car.prototype,carMixin);

// const honda = autoManufacture('car','honda');
// // honda.revEngine();
// const suv = autoManufacture('suv','cx5');

// suv.revEngine();

// //observer pattern



// //test
// let arr = [1, 2, 3, 4, 5];

// let functionOne = (funcArr) => {
//  let reverseArr = funcArr.slice(1).reverse();
//   console.log(reverseArr);
//   let x = reverseArr
//     .filter((element, index) => {
//       return index % 2 === 0;
//     })
//     .map((element) => {
//       let doubledNumber = element * 2;
//       //subtracting any digit that is greater than 9
//       if (doubledNumber > 9) {
//         console.log((doubledNumber -= 9));
//       }

//       return doubledNumber;
//     })
//     .reduce((item, accumulator) => {
//       return item + accumulator;
//     });

//   if (x % 10 === 0) {
//     return "valid";
//   } else {
//     return "invalid";
//   }
// };

// console.log(functionOne(arr));

function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
console.log(sameValueZero(3,3))