import "../layout/login.css";

export default function StudLoginForm() {
    return (
        <>
        <div class="container">
            <h1>LOGIN</h1>
            <form className="formStyle">
                <div class="elements">
                    <div class="form-group form-responsive">
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
                    <button type="login" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        </>
    )
}