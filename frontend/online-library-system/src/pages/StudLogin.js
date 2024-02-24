import logo from '../RSHS_1_Logo.png';

export default function StudLogin() {

    return (
        <>
        <div className="md:tw-bg-[url('/src/bg.jpg')] tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-min-h-dvh tw-min-w-full tw-gap-x-16 tw-gap-y-px">
            <div class="md:tw-text-left sm:tw-text-center">
                <h1 class="tw-text-6xl">Regional Science</h1>
                <h1 class="tw-text-6xl">High School</h1>
                <h3>for Region I</h3>
            </div>
            <div class="tw-bg-white tw-h-max tw-shadow-lg tw-rounded-lg">
                <div class="tw-pt-5 tw-flex tw-justify-center tw-items-center">
                    <img src={logo} class="tw-h-20 tw-w-20 tw-text-left" alt="RSHS Logo"/>
                    <h1>Login</h1>
                </div>
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
                        <button type="login" class="lgnbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Login</button>
                    </div>
                    <hr />

                    <h5 class="tw-flex tw-justify-center tw-items-center">Register</h5>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <button type="register" class="rgtbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Register</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}