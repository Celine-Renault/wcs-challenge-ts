// challenge.ts
console.log("toto01");

interface User {
	name: string;
	age?: number;
    birthday?: string; // ? optional type
}

const prettyPrintWilder = (users: User[]) => {
    console.log('toto02', users);
    users.map((user:User) => {
        // console.log('bibi',user);
		user.name
        user.age 
        user.birthday
        console.log(`${user.name} is ${user.age} years old and was born on ${user.birthday}`);
	}); 
};
console.log('toto03');

const wilders: User[] = [];

const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
  prettyPrintWilder(wilders);
