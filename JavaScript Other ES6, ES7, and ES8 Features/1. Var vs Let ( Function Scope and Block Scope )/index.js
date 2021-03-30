
function varVsLet(){
    for(i = 0; i < 5; i++){
        let condition = true
        if(condition == true){
            console.log('Hello world')
        }
    }
}

varVsLet()



































// let names = [
// 	'Stack Learner',
// 	'Stack School',
// 	'Stack Consultancy',
// 	'Stack Solution',
// 	'Stack Tech',
// ];



// // 3. Get Sliced Version -> ['Learner', 'School', 'Consultancy', 'Solution', 'Tech']
// console.log(text(names,(n) => {
//     return n.substr(6);
//     }));

// // 1. Extract Length -> [13, 12, 17, 14, 10]
//     console.log(text(names,(n) => {
//         return n.length;
//         }));
// // 2. Get UpperCase Version -> ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY']

// console.log(text(names,(n) => {
//     return n.toUpperCase();
//     }));

// function nameLength(arr){
// 	let namesArr = []
// 	for(index = 0; index < arr.length; index++){
// 		// array way
// 		namesArr.push(names[index].length)

// 		// travers way 
// 		console.log(names[index].length)		
// 	}	
// 	console.log(namesArr)
// }
// nameLength(names)


// // 2. Get UpperCase Version -> ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY']
// function upperCase(arr){
// 	for(index = 0; index < arr.length; index++){
// 		console.log(names[index].toUpperCase())		
// 	}
// }

// upperCase(names)
// // let names = [
// // 	'Stack Learner',
// // 	'Stack School',
// // 	'Stack Consultancy',
// // ];













// console.log(names.map( (n) => {
// return n.substr(6);
// }))


// // There is two problem down below.
// // you have to solve each problem



// const studentArray = [
// 	{ id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com' },
// 	{ id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com' },
// 	{ id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com' },
// 	{ id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com' },
// 	{ id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com' },
// ];


// function text(arr,logic){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         result.push(logic(arr[i],i,arr));
//     }
//     return result;
// }

















// // let finalResult = studentArray.filter( (student) => {
// //     if(student.gpa < 3){
// // return student.message = 'Your result published and you have been failed';
    
// //     }

// // })

// // console.log(finalResult.toString())


// // let sendEmail = ''




// // suppose this people have participated for their fourth semister and we want to send them email
// // but first we have to extract the email of everyone + name
// // for sending an email
// // So 1st show me how many students was failed and suppose you want to send them an
// // Email and in this Email print some message
// // The Email message would be same as written in studentArray but you have to add extra
// // message that is initial a name,then say their result has been published and they have got
// // actual gpa, you have failed.



// const studentArray1 = [
// 	{ id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com' },
// 	{ id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com' },
// 	{ id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com' },
// 	{ id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com' },
// 	{ id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com' },
// ];

// let finalResult1 = studentArray1.map( (student1) => {

// student1.e = 'fgf';
// return student1;

// })
// console.log(finalResult1)

// // suppose this people have participated for their fourth semister and we want to send them email
// // but first we have to extract the email of everyone + name
// // for sending greetings via email
// // So now you want to send each and every student Resulted Email
// // in this Email print some message
// // The Email message would be same as written in studentArray but you have to add extra
// // message that is initial a name,then say their result has been published and they have got
// // actual gpa, you have failed or Passed.