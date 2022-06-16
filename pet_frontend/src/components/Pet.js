const Pet = ({pet}) => {

    return (
        <>
            <h2>{pet.type}</h2>
            <h3>Name: {pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <hr/>
        </>    
    );

}

export default Pet;