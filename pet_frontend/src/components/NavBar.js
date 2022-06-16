const NavBar = () => {

    return (
        <nav>
            <h1>Adopt a Pet!</h1>
            <ul>
                <li><a href="#">ALL PETS</a></li>
                <li><a href="#">ADD NEW PET</a></li>
                <li><label>Search for the type of pet you want</label><input type="text" placeholder="Pet Type"/><button type="submit">SEARCH</button></li>
            </ul>
        </nav>
    );

}

export default NavBar;