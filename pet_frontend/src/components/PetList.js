import Pet from "./Pet";

const PetList = ({pets}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet}/>
    })
    console.log(petComponents);

    return (
        <>
            <h1>All Pets</h1>
            <hr/>
            <hr />
            {petComponents}
        </>
    );

}

export default PetList;