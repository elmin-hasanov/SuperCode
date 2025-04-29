import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router';

import AboutPage from './pages/AboutPage';
import OverviewPage from './pages/OverviewPage';
import SingleBirdPage from './pages/SingleBirdPage';

const router = createBrowserRouter([
  // hier wrappen wir eine Layout Komponente um die eigentlichen Routen herum.
  // das Layout soll auf jeder Seite genutzt werden, daher geben wir keinen path an
  {
    Component: Layout,
    children: [
      { path: '/', Component: OverviewPage },
      { path: '/about', Component: AboutPage },
      { path: '/birds/:name', Component: SingleBirdPage },
      // ! wenn wir element nutzen, muss die Komponente aufgerufen werden
      // ! d.h., < /> außenrum
      // {path: "/about", element: <AboutPage/>}
    ],
  },
]);

// ohne die Layout-Komponente, wuerden unsere Routen so aussehen:
// const router = createBrowserRouter([
//   { path: "/", Component: OverviewPage },
//   { path: "/about", Component: AboutPage },
// ]);

function Layout() {
  return (
    <main>
      <header>
        <Link className="" to="/">
          /overview
        </Link>
        <Link className="" to="/about">
          /about
        </Link>
      </header>

      {/* Mit Outlet markieren wir die Stelle im Layout an der der Inhalt, also die Unterrouten, angezeigt werden soll */}
      <Outlet />

      <footer>Footer</footer>
    </main>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}

// * DIY Routing ab hier:
// function Routes() {
//   // wir schauen mit location.pathname quasi in die addresszeile des browsers,
//   // und rendern dann die angemessene Komponente
//   if (location.pathname === "/about") {
//     return <AboutPage />;
//   } else if (location.pathname === "/") {
//     return <OverviewPage />;
//   } else {
//     return "404 => KAPPUUUUUUUUTT";
//   }
// }

// export default function App() {
//   return (
//     <div>
//       <nav>
//       <li>
//           <a href="/">/</a>
//         </li>
//         <li>
//           <a href="/about">/about</a>
//         </li>
//       </nav>
//       <Routes/>
//     </div>
//   );
// }
