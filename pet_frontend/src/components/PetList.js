import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })
    console.log(petComponents);

    return (
        <div id="pet-list">
            <h1>All Pets</h1>
            <ul>
            {petComponents}
            </ul>
        </div>
    );

}

export default PetList;