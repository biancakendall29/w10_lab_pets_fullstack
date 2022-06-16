import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })
    console.log(petComponents);

    return (
        <div id="petList">
            <h1>All Pets</h1>
            <hr/>
            <hr />
            {petComponents}
        </div>
    );

}

export default PetList;