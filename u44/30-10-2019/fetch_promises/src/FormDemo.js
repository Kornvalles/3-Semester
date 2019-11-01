import React, { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    function handleChange(event) {
        const target = event.target;
        //const id = target.id;
        const value = target.value;
        setName({ value });
        console.log(JSON.stringify(name))
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(name))
        window.alert(JSON.stringify(name))
    }

    return (
        <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <label>Name:
                <input type="text" placeholder="Name" /></label>
                <input type="submit" value="Submit" />
            </form>
            <p>{JSON.stringify(name)}</p>
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
