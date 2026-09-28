/*let Name = "Poonam";
let Salary = 5000;
let Experience = 7.5;
let profession = "QA"

if ( Name == "Poonam" && Salary >= 8000 &&  Experience <=5)
{
    console.log("Eligible for promotion" );
}
else if (  Name == "Poonam" && Salary <= 8000 &&  Experience >= 5)
{
    console.log("Not Eligible for promotion")
}
else 
{
    console.log("Invalid statment")
}*/

/*let Name = "Poonam";
let Salary = 5000;
let Experience = 7.5;
let profession = "QA"

if (Name == "poonam"  || profession == "Tested")
{
  console.log("Eligibile for test lead position")
}
else if (Experience >= 5 && Salary <= 1500000 )
{  
    console.log("Eligibile for Sr.test lead position")
}
else 
{
    console.log(" Not Eligible")
}*/



/*let projectName = "Spandana"
switch(projectName)
{
    case "BOI":
        console.log("Got BOI project");
        break
    case "IDBI":
        console.log("Got IDBI project");
        //break
    case "UBI":
        console.log("Got UBI project");
        break
    default:
        console.log("Invalid project");
        
}*/

let email1 = "  praveen.roy@qamitra.com"; 
let str = "Hello";


console.log(email1.length)
console.log(email1.charAt(3))
console.log(str.concat(email1))
console.log(email1.includes("Type"))
console.log(email1.includes("roy"));
console.log(email1.indexOf("@"))
console.log(email1.indexOf("mail"))
console.log(email1.lastIndexOf("."))
console.log(email1.slice(0,-10))
console.log(email1.substring(0, 10))
console.log(email1.startsWith("praveen"))
console.log(email1.endsWith("com"))
console.log(email1.toUpperCase())
console.log(email1.toLowerCase())
console.log(email1.trim)
console.log(email1.trimStart)
console.log(email1.trimEnd)//need to check 

let parts = email1.split("@"); 

console.log(parts[0]); 
console.log(parts[1]); 
let fullName1 = parts[0].split(".");
console.log(fullName1);

let fullName2 = parts[0].concat(parts[1]).split("."); 
console.log(fullName2);

let fullName3 = parts[0].includes(parts[1]).split("."); 
console.log(fullName3);

let email = "ebkitURL";
let email ="edAudioChunk";