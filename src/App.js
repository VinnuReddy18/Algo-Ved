import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tracks from './components/Tracks';
import Bootcamp from './components/Bootcamp';
import Careers from './components/Community';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Tracks from './components/Tracks';
// import Bootcamp from './components/Bootcamp';
// import Careers from './components/Careers';
// import { account, ID } from './lib/appwrite';
// import './styles.css';

// const App = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const user = await account.get();
//         setLoggedInUser(user);
//       } catch (error) {
//         console.error('No active session found', error);
//       }
//     };
//     checkSession();
//   }, []);

//   const login = async (email, password) => {
//     setLoading(true);
//     setError('');
//     try {
//       await account.createEmailSession(email, password);
//       const user = await account.get();
//       setLoggedInUser(user);
//     } catch (error) {
//       setError('Login failed. Please check your credentials.');
//       console.error('Login failed', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const register = async (email, password, name) => {
//     setLoading(true);
//     setError('');
//     try {
//       await account.create(ID.unique(), email, password, name);
//       await login(email, password);
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.error('Registration failed', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = async () => {
//     setLoading(true);
//     try {
//       await account.deleteSession('current');
//       setLoggedInUser(null);
//     } catch (error) {
//       console.error('Logout failed', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!loggedInUser) {
//     return (
//       <div>
//         <p>{loading ? 'Loading...' : 'Not logged in'}</p>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <form>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="email"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="current-password"
//           />
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             autoComplete="name"
//           />

//           <button type="button" onClick={() => login(email, password)} disabled={loading}>
//             Login
//           </button>

//           <button type="button" onClick={() => register(email, password, name)} disabled={loading}>
//             Register
//           </button>

//           <button type="button" onClick={logout} disabled={loading}>
//             Logout
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tracks" element={<Tracks />} />
//           <Route path="/bootcamp" element={<Bootcamp />} />
//           <Route path="/careers" element={<Careers />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
