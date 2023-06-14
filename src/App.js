import {
  Link,
  Navigate,
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const ROUTES = process.env.REACT_APP_PUBLIC_URL;
console.log(ROUTES);
const routes = [
  {
    path: ROUTES,
    element: <Home />,
  },
  {
    path: ROUTES + "/about",
    element: <About />,
  },
  {
    path: ROUTES + "/pagea",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES} />,
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
                        <Link to={ROUTES}>HOME</Link>         {" "}
          </li>
                   {" "}
          <li>
                        <Link to={ROUTES + "/about"}>ABOUT</Link>         {" "}
          </li>
                   {" "}
          <li>
                        <Link to={ROUTES + "/about"}>CONTACT</Link>         {" "}
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
