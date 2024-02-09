import "../layout/login.css";

export default function StudLogin() {
    return (
        <>
        <div class="bodycontainer">
            <div class="logincontainer">
                <h1>Login</h1>
                <form className="formStyle help">
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
                        <button type="login" class="lgnbutton btn btn-primary">Login</button>
                    </div>
                    <hr />

                    <h5>Register Account</h5>
                    <div class="elements">
                        <button type="register" class="rgtbutton btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}