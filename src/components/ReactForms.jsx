import { useState } from "react";
const INITIAL_STATE = {
    name:"", 
    password:"", 
    checked: false, 
    radioDog: true, 
    radioCat: false
}
export default function ReactForms (){
    const [form, setForm] = useState(INITIAL_STATE); 
    function handleChange(e){
        setForm({...form, 
            [e.target.id]: e.target.value
        });
    }
    function handleCheck(){
        setForm({...form, 
            checked: !form.checked
        })
    }
    function handleRadio(){
        setForm({...form, 
            radioCat: !form.radioCat, 
            radioDog: !form.radioDog   
        })        
    }
    function handleSubmit(e){
        e.preventDefault();
        //daca vrei sa accesezi direct din form HTML obj
        // let name = e.target.elements.name.value;
        // let password = e.target.elements.password.value; 
        // sau mai simplu: folosesti constr new FormData() - inputurile trebuie sa aiba name!! 
        // const formData = new FormData(e.target); 
        // const form = Object.fromEntries(formData);

        console.log(`Nume: ${form.name}; Parola: ${form.password}, Checked: ${form.checked}`);
        console.log(`favorite animal: ${form.radioCat? "cat" : "dog"}`)
        setForm(INITIAL_STATE); 
    }
    return (
        <div>
            <h1>React forms</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nume: </label>
                <input id="name" type="text"
                // name="name"
                value={form.name} 
                onChange={handleChange}
                />
                <br/>
                <label htmlFor="password">Parola: </label>
                <input id="password" type="password" 
                // name="password"
                value={form.password} 
                onChange={handleChange}
                />
                <br/>
                <label htmlFor="checked">
                    <input type="checkbox" id="checked"
                    // name="checked"
                    checked={form.checked} 
                    onChange={handleCheck}
                    />
                    Checkbox input
                </label>
                <br/>
                <label htmlFor="radioCat">
                    <input name="radioBtn" type="radio" 
                    id="radioCat"
                    checked={form.radioCat}
                    onChange={handleRadio}
                    /> Cat
                </label>
                <label htmlFor="radioDog">
                    <input name="radioBtn" type="radio" 
                    id="radioDog"
                    checked={form.radioDog}
                    onChange={handleRadio}
                    /> Dog
                </label>
                <br/>
                <button type="submit">Send</button>
                <button>Retry</button>
            </form>
        </div>
    )
}