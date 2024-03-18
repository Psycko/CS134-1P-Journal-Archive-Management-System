const { useEffect, useState } = require("react")



const AuthorizeUser = () => {
    const [isUser, setUser] = useState(false);
    

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token)
        {

        fetch('http://localhost:8081/authorizeUser', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: token})
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })  
            .then(res => res.json())
            .then(data => {
                if (data.status === "Student"){
                    setUser(true);
                }
            })
            .catch(err => console.log(err));
        }
    }, [])

    return isUser;
}


const AuthorizeAdmin = () => {
    const [isAdmin, setAdmin] = useState(false);
    
    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {

      fetch('http://localhost:8081/authorizeAdmin', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: token})
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })  
            .then(res => res.json())
            .then(data => {
                if (data.status === "Admin"){
                    setAdmin(true);
                }
            })
            .catch(err => console.log(err));
        }
    }, [])
    
    return isAdmin
}

const Delete = () => {
    localStorage.removeItem("token");
    return;
}


export {AuthorizeUser, AuthorizeAdmin, Delete}