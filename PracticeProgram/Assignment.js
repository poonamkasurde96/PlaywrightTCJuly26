"use strict";
/* Write a program to display the grade of a student
 >90 - A
 >80 && <90 - B >70 && <80 - C
 >50 && <70 - D
<50 - Failed */
let Marks = 40;
if (Marks > 90) {
    console.log("Grade A");
}
else if (Marks > 80 && Marks < 90) {
    console.log("Grade B");
}
else if (Marks > 70 && Marks < 80) {
    console.log("Grade C");
}
else if (Marks > 50 && Marks < 70) {
    console.log("Grade B");
}
else
    (Marks < 50);
{
    console.log("Failed");
}
