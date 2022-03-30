import React from "react"

const Form = (props) =>{
    const {change, submit, errors} = props;
    const {username, email, password, tos} = props.values

    const onChange = (e) => {
        const {name, value, checked, type} = e.target
        const newVal = type === "checkbox" ? checked : value;
        change(name,newVal);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return(
        <header>
        <div>
            <h1>Advanced Form:</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
                <form onSubmit={onSubmit}>
                    <label>Name
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}>
                        </input>
                    </label>
                    <label>Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}>
                        </input>
                    </label>
                    <label>Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}>
                        </input>
                    </label>
                    <label>Terms of Service
                        <input
                            type="checkbox"
                            name="tos"
                            checked={tos}
                            onChange={onChange}>
                        </input>
                    </label>
                    <br></br>
                    <input type="submit" value="Create a Friend"/>
                </form>
        </div>
        </header>
    )   
    }




export default Form