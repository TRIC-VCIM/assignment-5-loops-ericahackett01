do{
  password = prompt('What is the password?');

} while (password !== 'peanut');

let numberOfClassmates = prompt('How many classmates do you have?'); 

for(let i = 1; i <= numberOfClassmates; i++){
  let name = prompt("Enter Classmate " + i + " name");
  let list = document.createElement("li");
  list.textContent = name;

  document.querySelector("ul").appendChild(list);
}
