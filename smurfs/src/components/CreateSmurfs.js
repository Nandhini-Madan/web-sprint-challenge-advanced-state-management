import React, {useState} from 'react';
import {createSmurfs} from '../Actions/smurfsActions';
import { connect } from 'react-redux';




function SmurfForm(props) {
    const [newForm, setNewForm] = useState({name: "", age: "", height: ""});

    const handleChange = event => {
        console.log(event.target.name);
        setNewForm({
            ...newForm,
            [event.target.name]: [event.target.value]
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.createSmurfs(newForm);
        console.log("submitted");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="form__name"> 
            <input
                id= "name"
                type= "text"
                name= "name"
                placeholder= "insert Smurf's name"
                value= {newForm.name}
                onChange= {handleChange}
            />
            </label>
            <label className="form__age"> 
            <input
                id= "age"
                type= "text"
                name= "age"
                placeholder= "insert Smurf's age"
                value= {newForm.age}
                onChange= {handleChange}
            />
            </label>
            <label className="form__height"> 
            <input
                id= "height"
                type= "text"
                name= "height"
                placeholder= "insert Smurf's height"
                value= {newForm.height}
                onChange= {handleChange}
            />
            </label>
            <button>Add Smurf</button>
        </form>
    )

}

const mapDispatchToProps = {
    createSmurfs
}

export default connect( null, mapDispatchToProps)(SmurfForm);