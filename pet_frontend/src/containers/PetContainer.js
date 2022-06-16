import NavBar from "../components/NavBar";
import NewPetForm from "../components/NewPetForm";
import PetList from "../components/PetList";
import {useState, useEffect} from "react";

const PetContainer = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/pets")
            .then(response => response.json())
            .then(data => setPets(data))
    }, []);

    const postPet = (newPet) => {
        fetch("http://localhost:8081/pets",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newPet)
            })
            .then(response => response.json())
            .then(data => setPets([...pets, data]))
    }

    const deletePet = (id) => {
        fetch("http://localhost:8081/pets/" + id,
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        setPets(pets.filter(pet => pet.id !== id));
    }

    const searchForPet = (type) => {
        setPets(pets.filter(pet => pet.type === type));
    }


    return (
        <>
            <NavBar searchForPet={searchForPet}/>
            <NewPetForm postPet={postPet}/>
            <PetList pets={pets} deletePet={deletePet}/>
        </>    
    );

}

export default PetContainer;