function greetUser(user){
    let title;

    if(user.gender === "male"){
        title = "Mr.";
    } else if(user.gender === "female"){
        title = "Mrs.";
    } else{
        title = "others";
    }

    console.log(`Hi ${title} ${user.name} your age is ${user.age}`);
}

let user = {
    gender: "male",
	name: "Harkirat",
	age: 19
}

greetUser(user);