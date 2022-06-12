const tBody = document.querySelector(`tbody`);

let order = "name";
let orderD = "asc";

let dog = "dog"
let cat = "cat"
let bunny = "bunny"
let showType = ["dog" , "cat",  "bunny"]


const fetchPets = async () => {
    const res = await fetch(`http://localhost:8081/pets?showType=${showType}&order=${order}&orderD=${orderD}`);
    const pets = await res.json();

    tBody.innerText = "";

    pets.forEach(pet => {
        
        const row = document.createElement(`tr`);
        const name = document.createElement(`td`);
        const type = document.createElement(`td`);
        const age = document.createElement(`td`);
        
        name.textContent = pet.name;
        type.textContent = pet.type;
        age.textContent = pet.age;
              
        row.append(name, type, age);
        tBody.append(row);    
    })
}
fetchPets();

let sortAge = document.querySelector("#sortAge")
sortAge.addEventListener("click", () => {
    sortAge.textContent = sortAge.textContent === "Age (dsc)" ? "Age (asc)" : "Age (dsc)"
    order = "age"
    if (orderD === "asc") {
        orderD = "dsc"
    } else {
        orderD = "asc"
    }
    fetchPets()
});

let sortName = document.querySelector("#sortName")
sortName.addEventListener("click", () => {
    sortAge.textContent = sortAge.textContent === "Age (dsc)" ? "Age (asc)" : "Age (dsc)"
    order = "name"
    if (orderD === "asc") {
        orderD = "dsc"
    } else {
        orderD = "asc"
    }
    fetchPets()
});

let sortType = document.querySelector("#sortType")
sortType.addEventListener("click", () => {
    sortAge.textContent = sortAge.textContent === "Age (dsc)" ? "Age (asc)" : "Age (dsc)"
    order = "type"
    if (orderD === "asc") {
        orderD = "dsc"
    } else {
        orderD = "asc"
    }
    fetchPets()
});

let dogBatton = document.getElementById("dogs")
document.getElementById("dogs").addEventListener("click", () => {
    dogBatton.classList.toggle("battonOn")
    if (showType.includes("dog")) {
        showType = showType.filter(
            (pet) => pet !== "dog"
        );
    }else {
        showType.push("dog")
    }
    fetchPets()
})

let catBatton = document.getElementById("cats")
document.getElementById("cats").addEventListener("click", () => {
    catBatton.classList.toggle("battonOn")
    if (showType.includes("cat")) {
        showType = showType.filter(
            (pet) => pet !== "cat"
        );
    }else {
        showType.push("cat")
    }
    fetchPets()
})

let bunnyBatton = document.getElementById("bunnys")
document.getElementById("bunnys").addEventListener("click", () => {
    bunnyBatton.classList.toggle("battonOn")
    if (showType.includes("bunny")) {
        showType = showType.filter(
            (pet) => pet !== "bunny"
        );
    }else {
        showType.push("bunny")
    }
    fetchPets()
})