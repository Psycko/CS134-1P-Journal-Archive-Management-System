const { useEffect, useState } = require("react")



const AuthorizeUser = () => {
    const [isUser, setUser] = useState(false);


    useEffect(() => {
<<<<<<< HEAD
        const token = localStorage.getItem("token");
        if (token) {
=======
        const token = localStorage.getItem("student");
        if (token)
        {
>>>>>>> 61f170c7f7a4608645c92205c31df617d639bdd9

            fetch('https://online-library-system-api.onrender.com/authorizeUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

<<<<<<< HEAD
                body: JSON.stringify({ token: token })
=======
                body: JSON.stringify({token: token})
            })  
            .then(res => res.json())
            .then(data => {
                if (data.status === "Expired") {
                    Delete("student");
                }
                else if (data.status === "Student"){
                    setUser(true);
                }
>>>>>>> 61f170c7f7a4608645c92205c31df617d639bdd9
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "Student") {
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
<<<<<<< HEAD
        const token = localStorage.getItem("token");
=======
      const token = localStorage.getItem("admin");
>>>>>>> 61f170c7f7a4608645c92205c31df617d639bdd9

        if (token) {

<<<<<<< HEAD
            fetch('https://online-library-system-api.onrender.com/authorizeAdmin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: token })
=======
        fetch('http://localhost:8081/authorizeAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: token})
            })  
            .then(res => res.json())
            .then(data => {
                if (data.status === "Expired") {
                    Delete("admin");
                }
                else if (data.status === "Admin"){
                    setAdmin(true);
                }
>>>>>>> 61f170c7f7a4608645c92205c31df617d639bdd9
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "Admin") {
                        setAdmin(true);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [])

    return isAdmin
}

const Delete = (name) => {
    localStorage.removeItem(name);
    return;
}


export { AuthorizeUser, AuthorizeAdmin, Delete }