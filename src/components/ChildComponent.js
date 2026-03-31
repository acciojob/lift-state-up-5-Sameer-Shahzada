import React from 'react'

const ChildComponent = ({ isLoggedIn, setisLoggedIn }) => {

    const handleSubmit = (e) => {
        e.preventDefault();   // prevent page reload
        setisLoggedIn(true);  // update parent state
    };

    return (
        <>
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="Username">Username:</label>
                    <input id="Username" type="text" />
                    <br /> <br />
                    <label htmlFor="Password">Password:</label>
                    <input id="Password" type="password" />
                    <br /> <br />
                    <button type='submit'>Login</button>

                </form>
            ) : (
                <h2>You are logged in!</h2>
            )}
        </>

    )
}

export default ChildComponent