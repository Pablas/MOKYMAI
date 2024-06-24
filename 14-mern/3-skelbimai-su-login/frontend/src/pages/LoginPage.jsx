import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useState } from "react";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)



    return (
        <div>
            <h1>Prisijungti</h1>
            <p>Noredami kurti skelbimus turite prisijungti prie sistemos</p>

            <form>
                <div>
                    <label htmlFor="usernameInput">Vartotojo vardas: </label>
                    <input type="text" id="usernameInput" name="username" />
                </div>
                <div>
                    <label htmlFor="passwordInput">Slaptazodis: </label>
                    <input type={ showPassword ? "text" : "password"} id="passwordInput" name="password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        { !showPassword && <EyeClosed size={16}/>}
                        { showPassword && <Eye size={16}/>}
                    </button>
                </div>
                <div>
                    <button type="submit">Prisijungti</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage