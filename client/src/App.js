import React from 'react';
import routes from './routes'
import { Switch, Route } from 'react-router-dom'

// Providers
import { RestaurantsProvider } from './providers/Restaurants.provider';
import { ShopsProvider } from './providers/Shops.provider'

// Components
import Navbar from './components/Navbar'

const App = () =>
    <React.Fragment>
      <Navbar />
      <main>
        <RestaurantsProvider>
          <ShopsProvider>
            <Switch>
              {
                routes.map((route, idx) => <Route key={idx} {...route} />)
              }
            </Switch>
          </ShopsProvider>
        </RestaurantsProvider>
      </main>
    </React.Fragment>

export default App;
