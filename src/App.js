import 'modern-normalize/modern-normalize.css';

import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';

const HomePage = lazy(() =>
  import('./Views/HomePage' /*webpackChunkName: "home-page"*/),
);
const CatPage = lazy(() =>
  import('./Views/CatPage' /*webpackChunkName: "cat-page"*/),
);
const DogPage = lazy(() =>
  import('./Views/DogPage' /*webpackChunkName: "dog-page"*/),
);
const FoxPage = lazy(() =>
  import('./Views/FoxPage' /*webpackChunkName: "fox-page"*/),
);

function App() {
  return (
    <>
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense fallback={'l o a d i n g...'}>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/cat" exact>
                <CatPage />
              </Route>
              <Route path="/dog" exact>
                <DogPage />
              </Route>
              <Route path="/fox" exact>
                <FoxPage />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
