function SignIn () {
    return (
        <div className="sign-in">
        <h1>Argent Bank</h1>
        <h2>Sign In</h2>
        <form>
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Sign In</button>
        </form>
        <a href="./sign-in.tsx">Forgot Password?</a>
        </div>
    );
    }

    export default SignIn