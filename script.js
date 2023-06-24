//your JS code here. If required.
let name1 = document.getElementById("name").value
let age1 = document.getElementById("age").value

document.getElementById("btn").addEventListener("click",()=>{
	console.log("btn is clicked")
	checkAge(name, age)
  .then(message => {
    alert(message);
  })
  .catch(errorMessage => {
    alert(errorMessage);
  });
})


function checkAge(name1, age1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}