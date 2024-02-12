export default function Register() {
    return (
        <>
        <div class="container tw-flex tw-justify-center tw-items-center tw-min-h-dvh">
            <div class="container2 tw-bg-sky-200 tw-rounded-lg">
                <h1 class="tw-pt-5 tw-flex tw-justify-center tw-items-center">Register</h1>
                <form className="formStyle tw-w-96 tw-mx-auto tw-p-4">
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                            <label for="lrnLabel">Student LRN </label>
                            <input class="form-control" id="lrnInput" placeholder="LRN" />
                        </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <button type="login" class="rgtbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Register</button>
                    </div>
                    <hr />

                    <h5 class="tw-flex tw-justify-center tw-items-center">Login</h5>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <button type="register" class="lgnbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}