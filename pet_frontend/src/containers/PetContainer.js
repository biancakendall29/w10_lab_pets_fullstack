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


    return (
        <>
            <NavBar />
            <NewPetForm />
            <PetList pets={pets}/>
        </>    
    );

}

export default PetContainer;