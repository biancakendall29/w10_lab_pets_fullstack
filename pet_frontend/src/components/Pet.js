const Pet = ({pet, deletePet}) => {

    const handleClick = () => {
        deletePet(pet.id);
    }

    return (
        <div id="pet-card">
            <li>
            <h2>{pet.type}</h2>
            <h3>Name: {pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <button id="remove" onClick={handleClick}>Remove Pet</button>
            </li>
        </div>    
    );

}

export default Pet;