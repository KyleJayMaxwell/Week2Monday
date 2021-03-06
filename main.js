//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

var me = {
  name: 'Kyle Maxwell',
  city: 'Denver',
  job: 'Student',
};

//console.log("Question 1");
console.log(me);
// Object {name: "Kyle Maxwell", city: "Denver", job: "Student"}


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

var me = {
  name: 'Kyle Maxwell',
  city: 'Denver',
  job: 'Student',
  family: ['Jim', 'Kelly', 'Courtney'],
};
console.log(me);
// Object {name: "Kyle Maxwell", city: "Denver", job: "Student", family: Array['Jim', 'Kelly', 'Courtney']}


// 3. Using the "me" object, use two different methods of accessing your city.
me.city 
// Denver
me["city"]
// Denver


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)
invitees.adults[0].dinnerChoice[1];
// "Beef"

// 5. Access Pablo's table number.
invitees.children[1].table;
// "4"

// 6. Access Lauren's seating specialConsideration.
invitees.adults[2].specialConsiderations;
// Object {allergies: "melon", seating: "Don't sit her next to ex husband at table 8."}


// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)
invitees.adults[1].dinnerChoice[2];
// "sorbet"


// 8. Access Ada's allergies.
invitees.children[2].allergies;
// ["Boys"]


// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
var laurenAppetizer = invitees.adults[2].dinnerChoice[0];
console.log(laurenAppetizer);
// Soup
var laurenDinner = invitees.adults[2].dinnerChoice[1];
// Chicken
var laurenDessert = invitees.adults[2].dinnerChoice[2];
// Ice Cream
var laurenString = "Lauren's appetizer is " + laurenAppetizer + ". " + "She will be eating " + laurenDinner + " for dinner and has selected " + laurenDessert + " as her dessert.";

console.log(laurenString)
// Lauren's appetizer is soup. She will be eating chicken for dinner and has selected ice cream as her dessert.


// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

var jsWorkshop = new Object();
// properties under it


// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
var jsWorkshop = new Object();
jsWorkshop.classmates = ["Pascalle", "Jessica", "Gustavo", "Andrew", "Chris"];
// ["Pascalle", "Jessica", "Gustavo", "Andrew", "Chris"] 


// 12. Acesss the third classmate in your "jsWorkshop" object.
var jsWorkshop = new Object();
jsWorkshop.classmates = ["Pascalle", "Jessica", "Gustavo", "Andrew", "Chris"];
jsWorkshop.classmates[2];
//Gustavo


// 13. Get the length of the fourth classmate's name.
jsWorkshop.classmates[3].length;
//6


// 14. Clear the classmates value.
jsWorkshop = '';
// Cleared


// 15. Create an emtpy array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
//    var books = [{ youHadMeAtWoof: {
                //                   title: "You Had Me at Woof",
                //                   author: "Julie Klum",
                //                   pages: 207
                //                   },
                //    theCatcherInTheRye: {
                //                   title: "The Catcher in the Rye",
                //                   author: "JD Salinger",
                //                   pages: 214
                //                   },
                //    bangkokHaunts: {
                //                   title: "Bangkok Haunts",
                //                   author: "John Burdett",
                //                   pages: 569,
                //                   }
                // }]

var books = [];

var book1 = {
  title: "War and Piece",
  author: "Leo Tolstoy",
  pages: 1440,
};
var book2 = {
  title: "Life Of Pi",
  author: "Yann Martel",
  pages: 336,
};
var book3 = {
  title: "Iliad",
  author: "Homer",
  pages: 683,
};

var books = [book1, book2, book3];

// 15a. Access the author of the first book.
books[0].author;
// Leo Tolstoy


// 15b. Print the length of the author the the third book.
books[2].author.length;
// 5


// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)
book1.dateRead = 1990;
book2.dateRead = 1997;
book3.dateRead = 2005;


// 17. Remove the second book from the books Array.
books.splice(1, 1);
// book 2
console.log(books)
// [book1, book3]


// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
//Literal Notation to me is more simple, it creates the object and then wraps its properites. i.e. good for data

// Constructor is making a variable equal an object, and then lists out each of the variables.properties. ie good for behavior.


// 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.
var waterBottle = new Object();
waterBottle.color = "Blue";
waterBottle.size = 32;
waterBottle.material = "Plastic";
waterBottle.brand = "Nalgene";
waterBottle.decoration = "Stickered";

var waterBottle = {
  color:  "Blue",
  size:  32,
  material:  "Plastic",
  brand:  "Nalgene",
  decoration:  "Stickered",
};

// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
var zoo = {};


// 19. Create, assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
var lion = new Object();
var tiger = new Object();
var zebra = new Object();


// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
lion.timeSlept = 10;
tiger.timeSlept = 8;
zebra.timeSlept = 7;


// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
lion.meals = [];
tiger.meals = [];
zebra.meals = [];


// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
var monday = new Object();
var wednesday = new Object();

lion.meals = [monday, wednesday];
tiger.meals = [monday, wednesday];
zebra.meals = [monday, wednesday];


// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  // [ { monday: {
  //   breakfast: "cheetos on top of greek yogurt",
  //   lunch: "6 gallons of Diet Coke",
  //   dinner: "leftover lasagna"
  // }},
  //  {wednesday: {
  //   breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
  //   lunch: "a ham and cheddar lunchable",
  //   dinner: "I put my thing down, flip it, and reverse it"
  // }}]

monday.breakfast = "Giraffe w/ steaksauce";
monday.lunch = "Human babies";
monday.dinner = "Lettuce";

wednesday.breakfast = "Mango and Chili";
wednesday.lunch = "Pepsi and Fritos";
wednesday.dinner="Monkeys";


// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
tiger.timeSlept + 2;
// 10 
tiger.timeSlept = 10;


// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.
lion.favoriteActivities = "King of the Rock";
tiger.favoriteActivities = "Hunting Shit";
zebra.favoriteActivities = "Galloping away from stuff";


// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
tiger.meals[0].lunch = "";

// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.
var zoo = new Object();

zoo.animals = [lion, tiger, zebra];


// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
zoo.zookeepers = new Object();


// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
var sarah = new Object();
var sam = new Object();

zoo.zookeepers = [sarah, sam];


// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
sarah.hireDate = "";
sam.hireDate = "";


