function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution: Access the array element or use a different approach
console.log(greeter(user[0])); // Access the first element

//Alternative solution: Handle array of strings
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));