var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var people = 
// [{
//   name:"Ahmed",
//   photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   scores:[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// },{
// 	name: "Aiman",
// 	photo:""
// 	scores:[
// 	1,
// 	1,
// 	5,
// 	4,
// 	2,
// 	1,
// 	1,
// 	4,
// 	3,
// 	2
// 	]
// }];

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});