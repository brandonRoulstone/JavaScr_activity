 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
let heading = document.getElementById("heading");
heading.innerText = `This is the main heading`


// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

// let newParagraph = document.getElementsByClassName("paragraph");

// for (let i = 0; i < newParagraph.length; i++) {

//     newParagraph[i].textContent = "This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself";

// }
let paragraph = document.querySelector(".paragraph");

// Update the content of the selected element
paragraph.textContent = "This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself";

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
let subHead = document.querySelector("h3");

subHead.textContent = "Things I've accomplished so far";

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
let newText = document.querySelectorAll("p");

newText.forEach(value => {
    value.textContent = "I have discovered that I can accomplish anything I put my mind to"
});

// So far you have hints, however the hints have lessened.

// 5.1. Attach the first input to a variable
let inputOne = document.querySelector("[data-firstMultiply]").value;
// 5.2. Attach the second input to a variable
let inputTwo = document.querySelector("[data-secondMultiply]").value;
// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)\
let btnCalculate = document.querySelector("[data-calculate1]");

// btnCalculate.addEventListener("click", () => {
//     let inputOne = document.querySelector("[data-firstMultiply]").value;
   
//     let inputTwo = document.querySelector("[data-secondMultiply]").value;
   
//    res.textContent = evaluate(inputOne, inputTwo);
   
//    });

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going  
let res = document.querySelector("[data-first]");

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
    function evaluate(inpt1, inpt2){
        let res = inpt1 * inpt2
        console.log(res)
        return res.textContent = res;
    }

// 5.6. Add an event listener to the button that runs the function that tyou created
    btnCalculate.addEventListener("click", () => {
        let inputOne = document.querySelector("[data-firstMultiply]").value;
    
        let inputTwo = document.querySelector("[data-secondMultiply]").value;
    
    res.textContent = evaluate(inputOne, inputTwo);
    
    });

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText


// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable

let inputValueOne = document.querySelector("[data-firstModulus]").value;

// 6.2 Set the send modulud input to a variable
let inputValueTwo = document.querySelector("[data-secondModulus]").value;

// 6.3 Set the SECOND span to a varable(will display answer)

let calculatedRes = document.querySelector("[data-second]");

// 6.4 Set the SECOND button to a variable(to run event listener)
let newEvalBtn = document.getElementById("calculate2");
// newEvalBtn.addEventListener("click", () => {
//     let inputValueOne = document.querySelector("[data-firstModulus]").value;
//     let inputValueTwo = document.querySelector("[data-secondModulus]").value;
//     calculatedRes.textContent = divide(inputValueOne, inputValueTwo);
// });

// 6.5 Create a normal function to calculate the modulus of the inputs
    function divide(x, y){
        let finalRes = x % y;
        console.log(finalRes);
        return calculatedRes.textContent = finalRes
    }

// 6.6 Add an event listener to the button which will run the function you created
    newEvalBtn.addEventListener("click", () => {
        let inputValueOne = document.querySelector("[data-firstModulus]").value;
        let inputValueTwo = document.querySelector("[data-secondModulus]").value;
        calculatedRes.textContent = divide(inputValueOne, inputValueTwo);
    });
// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7

// 7.1 Change the text of 'Bubble Tea' to 'White Tea'

let newBev = document.getElementById("bubbleTea");

newBev.textContent = "White Tea";

// 7.2 Change the text of 'Green Tea' to 'Black tea'
let newBevTwo = document.querySelector(".greenTea");

newBevTwo.textContent = "Black tea";

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
let newBevThree = document.querySelector("[data-icedTea]");

newBevThree.textContent = "Herbal Tea";


// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = "John";
// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20;
// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes'];

//             Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3] = "Lamborgini"
// console.log(coolCars[3]);
console.log(coolCars);
// 12. Use a for loop to loop through the array, and console.log every value inside of the array.
// let i = coolCars;
for(let i = coolCars; i < coolCars.length; i++){
    console.log(i);
}
// 13. Reverse the array and console.log the reversed array.

let newValue = coolCars.reverse();

console.log(newValue);

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]

let removedArray = coolCars;

console.log(removedArray.pop());

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']

coolCars[4] = "BMW";
console.log(coolCars.reverse());

//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
let Age = 18;
let a = 17;
if (Age > a) {
    console.log("You qualify");
} else if (a !== Age ){
    console.log("You are too young");
} else {
    console.error("err");
}
// 17. Make use of a switch statement and create a possible soultion for no.16
switch(true){
    case(Age > a):
        console.log("Seems like you qualify");
        break;
    case(a !== Age || a < Age):
        console.log("You too young");
}
// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')

    let MathMark = 77;
    let physicsMark = 70;
    let EnglishMark = 50;
    let average_mark = (MathMark+ physicsMark + EnglishMark) / 3

switch(true){
    case(average_mark >= 80):
        console.log(`You did well your average was ${average_mark.toFixed(0)}%`);
        break;

    case(average_mark === 79 ):
        console.log(`message="You average was good, it was ${average_mark.toFixed(0)}%`);
        break;

    case(average_mark <= 69):
        console.log(`message='Your average was okay, it was: ${average_mark.toFixed(0)}%`);
        break;

    case(average_mark <= 49):
        console.log(`message ='You must work harder next time`);
}


// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1
let m = 0;
while (m <= parentsAge){
    console.log(m);
    m++
}
// 20. USE while or a do while loop to print out the array of Question15(coolCars).
let F = 0;
while (F < coolCars.length){
    console.log(coolCars[F]);
    F++
}
// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
let chair ={
    legs: 4,
    material: "plastic"
};


// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.

chair.armRestBars = "None";

// 23.1.   What code will I write to view the value of the armRestBars.

console.log(chair);

// 23.2    What code can I use to delete the property of legs with the value of 4.

delete chair.legs;
console.log(chair);

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description

function electricalDevices(name, type, year, description){
    return{
        name: name,
        type: type,
        year: year,
        description:description
    }
}
// 24. Create 4 objects of your choice using a factory function and console.log() each of them
let newDevice = electricalDevices("Samsung", "S23", "2023", "Space Gray");
console.log(newDevice)
// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

function car(brand, year, model, transmission, drivetrains){
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.transmission = transmission,
    this.drivetrains = drivetrains
}

// 26. Create 4 objects of your own and print to the console all of the created objects.

let carOne = new car('Jeep TrackHawk', 'Grand cherokee', '2019', 'Manual/Automatic', 'All Wheel Drive');
let carTwo = new car('Mercedes-Benz', 'G63', '2023', 'Manual/Automatic', 'All Wheel Drive');
let carThree = new car('Audi', 'Rs5', '2023', 'Manual/Automatic', 'All Wheel Drive');
let carFour = new car('Lamborgini', 'SVJ', '2023', 'Manual/Automatic', 'All Wheel Drive');
console.log(carOne, carTwo, carThree, carFour);

// 27. After, push the 4 objects to an array called 'informationAboutCars'.

let informationAboutCars = [];
informationAboutCars.push(carOne);

// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'
let globalFunction = function(){
    console.log(`The car brand ${carOne.brand} has a model of a ${carOne.model} that was produced in ${carOne.year}. It is a manual and is a ${carOne.drivetrains}`);
}

globalFunction();

// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements
let car1 = document.querySelector("[data-car1]");
let car2 = document.querySelector("[data-car2]");
let car3 = document.querySelector("[data-car3]");
let car4 = document.querySelector("[data-car4]");

function displayCarInformation(car, element) {
    element.textContent = `The car brand ${car.brand} has a model of ${car.model} that was produced in ${car.year}. It is a ${car.transmission} and is a ${car.drivetrains}`;
}

displayCarInformation(carOne, car1);

displayCarInformation(carTwo, car2);

displayCarInformation(carThree, car3);

displayCarInformation(carFour, car4);

// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
// let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes'];

    if (coolCars[0] === "BMW"){
        console.log("This item does appear in the array");
    } else {
        console.log("The item does not appear in the array");
    }

// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
let newArr = [5, 18, 14, 16, 2, 1];

//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number

function findMiddleValue(arr) {

    const ArrLength = arr.length;
    
    if (ArrLength % 2 === 0){

        const midValue = ArrLength / 2 - 1;

        const midValueTwo = ArrLength / 2;

        const allValues = [arr[midValue], arr[midValueTwo]];

        return allValues;

    } else {

        const mid_val = Math.floor(ArrLength / 2);

        const mid_val_2 = arr[mid_val];

        return mid_val_2;

    }

}

let foundResult = findMiddleValue(newArr);
console.log(foundResult);

// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested 
// from the user and the message ust be written to the html page in the corresponding element

try {
    // let btnCheck = document.getElementById("Ques32");
   let promval =  prompt("Enter your age");
    if (promval === "") {
        alert("enter your age please");
    } else if (promval.length > 2) {
        alert("Enter a valid age");
    } else if (promval >= Age) {
        alert("Your age quallifies");
    } else if (promval < a) {
        alert("Looks like your age does not qualify")
    }
} catch (err) {
    console.log(err);
    alert("Server responded with a 404 Error");
}


