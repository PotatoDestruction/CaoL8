const addPet = async (pet) => {
    await fetch(`http://localhost:8081/pets`, {
    method: `POST`,
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(pet)
    })
}
document.querySelector("form").addEventListener(`submit`,event => {
    event.preventDefault();
       
        const elements = event.target.elements;
        console.log(elements.addType.value);
        const pet = {
            name: elements.addName.value,
            type: elements.addType.value,
            age: Number(elements.addAge.value)           
        };
        console.log(pet);

    addPet(pet);

    elements.addName.value = ``;
    elements.addType.value = ``;
    elements.addAge.value = ``;
})