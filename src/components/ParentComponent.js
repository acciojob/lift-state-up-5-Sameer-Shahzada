import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [isLoggedIn, setisLoggedIn] = useState(true);

    return (
        <>
            <h1>Parent Component</h1>
            <ChildComponent
                isLoggedIn={isLoggedIn} 
                setisLoggedIn={setisLoggedIn} 
            />
        </>
    )
}
export default ParentComponent;