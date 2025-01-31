```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function Users(){
    return(
        <Routes>
            <Route path=':id' element={<User/>}/>
        </Routes>
    );
}
function User() { return <h1>User</h1>; }
export default App;
```