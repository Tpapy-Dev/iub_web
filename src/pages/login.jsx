import {useState} from 'react';
import {NextRouter, useRouter} from 'next/router';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, password})
        });

        const data = await res.json();
        
        if(res.ok){
            localStorage.setItem('iubRecordsIsLoggedIn', data.token);
            const redirectTo = router.query.redirectTo || '/';
            router.push(redirectTo);
        }else{
            setError(data.message);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e=>setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
            >
              Login
            </button>
          </form>
        </div>
    );
}
 
export default Login;