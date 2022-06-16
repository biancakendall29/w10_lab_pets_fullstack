const NavBar = ({searchForPet}) => {

    let input = "";

    const handleSearchChange = (event) => {
        input = event.target.value;
    }

    const handleSearchClick = () => {
        searchForPet(input);
    }
    
    const handleResetClick = () => {
        alert("Refresh page to see all pets")
    }

    return (
        <nav>
            <h1>Adopt a Pet!</h1>
            <ul>
                <li><a href="#petList">ALL PETS</a></li>
                <li><a href="#form">ADD NEW PET</a></li>
                <li><label>Search for the type of pet you want</label>
                    <input type="text" placeholder="Pet Type" onChange={handleSearchChange}/>
                    <button onClick={handleSearchClick}>SEARCH</button>
                    <button onClick={handleResetClick}>RESET</button>
                </li>
            </ul>
        </nav>
    );

}

export default NavBar;