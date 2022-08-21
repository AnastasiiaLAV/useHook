import { useRef, useEffect, useState } from "react";


export default function Form() {
    const [email, setEmail] = useState('a');
    const [password, setPassword] = useState('');

    const ref = useRef();

    const handleInput = ({ target: {value, name}}) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
         }
    }

    useEffect(() => {
        
        ref.current.style.display = 'none';
        
        console.log('ref', ref)
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        ref.current.style.display = 'block';
    }
    return (
        <>
        <form action="" onSubmit={onSubmit}>
            <label >
                Email
              <input type="email" name="email"  value={email} onChange={handleInput}/>  
            </label>
            <label >
                Password
                <input type="password"  name="password" value={password} onChange={handleInput}/>
            </label>
            <button type="submit">Click me</button>

            </form>
            
        <label >
                Cucu
                <input type="password" ref={ref} name="password" value={password} onChange={handleInput}/>
            </label>

        </>
    )
}