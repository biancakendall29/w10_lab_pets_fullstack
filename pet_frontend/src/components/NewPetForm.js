import {useState} from "react";

const NewPetForm = ({postPet}) => {

    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedStatePet = {...statePet};
        copiedStatePet[propertyName] = event.target.value;
        setStatePet(copiedStatePet);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet);
    }

    return (
        <form id="form" onSubmit={handleFormSubmit}>
            <h2>Add a new pet:</h2>
            <label>Pet Name</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={statePet.name}/>
            <label>Pet Age</label>
            <input type="text" placeholder="Age" name="age" onChange={handleChange} value={statePet.age}/>
            <label>Pet Type</label>
            <input type="text" placeholder="Type" name="type" onChange={handleChange} value={statePet.type} />
            <label>Pet Breed</label>
            <input type="text" placeholder="Breed" name="breed" onChange={handleChange} value={statePet.breed}/>
            <button type="submit">ADD</button>
        </form>
    );

}

export default NewPetForm;