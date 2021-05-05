
// function user(name,age,hobby){
//     let user = {
//         name,
//         age,
//         hobby,
//         activity: function(){
//             console.log('He Stated walking')
//         }
//     }
//     return user;
// }


//  console.log(user('rakib',35,'Playing'));
//  console.log(user('Smith',45,'Playing Cricket'));

//  function User(name,age,hobby){
//     console.log(this);
//         this.name = name,
//         this.age = age,
//         this.hobby = hobby,
//         this.activity = function(){
//             console.log('He Stated walking')
// }
// console.log(this);
//  }


// let user = new User('rakib',22,'Drawing');
// console.log(user)




// Phototype


function User1(name,age,hobby){
    
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  User1.prototype = {
      work: function(){
          console.log('He is a Doctor')
       }
  }
  

  // const marie = new User1('marie',34,'reading')
  // console.log(marie)
  
  // const smith = new User1('smith',32,'traveling')
  // console.log(smith)
  
  
  // const harry = new User1('harry',40,'watching tv')
  // console.log(harry)
  

  Object.prototype.sumit = {
      work: function(){
          console.log('he is a doctor')
      }
  }
  
  
  let exp = {
  
  }
  
  console.log(exp)

