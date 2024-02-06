import "../styles/login.css";

export default function Register() {
    return (
        <>
        <div class="bodycontainer">
            <div class="logincontainer">
                <h1>Register</h1>
                <form className="formStyle">
                    <div class="elements">
                        <div class="form-group ">
                            <label for="lrnLabel">Student LRN </label>
                            <input class="form-control" id="lrnInput" placeholder="LRN" />
                        </div>
                    </div>
                    <div class="elements">
                        <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                    </div>
                    <div class="elements">
                        <button type="login" class="rgtbutton btn btn-primary">Register</button>
                    </div>
                    <hr />

                    <h5>Login</h5>
                    <div class="elements">
                        <button type="register" class="lgnbutton btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}