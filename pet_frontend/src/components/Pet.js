const Pet = ({pet, deletePet}) => {

    const handleClick = () => {
        deletePet(pet.id);
    }

    return (
        <>
            <h2>{pet.type}</h2>
            <h3>Name: {pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <button onClick={handleClick}>Remove Pet</button>
            <hr/>
        </>    
    );

}

export default Pet;