import {
  Link,
  Navigate,
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "pagea",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <nav>
               {" "}
        <ul>
                   {" "}
          <li>
                        <Link to="/">HOME</Link>         {" "}
          </li>
                   {" "}
          <li>
                        <Link to="/about">ABOUT</Link>         {" "}
          </li>
                   {" "}
          <li>
                        <Link to="/pagea">CONTACT</Link>         {" "}
          </li>
                 {" "}
        </ul>
             {" "}
      </nav>
            {routing}   {" "}
    </>
  );
}

export default App;
