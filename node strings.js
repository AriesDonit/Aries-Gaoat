// Step 1 & 2: Create variables for favorite actor's first and last names
let favActorFirstName = "Robert";
let favActorLastName = "Downey";

// Step 3: Concatenate first and last names into fullName
let fullName = favActorFirstName + " " + favActorLastName;

// Step 4: Store lowercase version of fullName
let lowercase = fullName.toLowerCase();

// Step 5: Store uppercase version of favorite pet's name
let favPetName = "Buddy";  // Assume pet name is "Buddy"
let uppercase = favPetName.toUpperCase();

// Step 6: Store a message with actor's full name in uppercase
let message = `My favorite actor is ${fullName.toUpperCase()}`;

// Step 7: Append message to include best show
message += " and his best show is Silicon Valley.";

// Step 8: Log all variables to the console
console.log("Favorite Actor First Name:", favActorFirstName);
console.log("Favorite Actor Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Lowercase Actor Name:", lowercase);
console.log("Uppercase Pet Name:", uppercase);
console.log("Message:", message);
