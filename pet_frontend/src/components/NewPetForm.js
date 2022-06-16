// import {useEffect, useState} from "react";

const NewPetForm = () => {

    const handleChange = () => {
        
    }

    return (
        <form>
            <h2>Add a new pet:</h2>
            <label>Pet Name</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <label>Pet Age</label>
            <input type="text" placeholder="Age" name="age" onChange={handleChange}/>
        </form>
    );

}

export default NewPetForm;