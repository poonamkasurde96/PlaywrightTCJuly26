let dis1 = (name:string, age?:number) => {
    if (age == undefined) {
        console.log(`Name: ${name}`)
    }
    else
    console.log(`Name: ${name}, Age: ${age}`);
}
dis1("archana")
dis1("archana",27)