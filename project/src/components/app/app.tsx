import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { Offers } from '../../types/offer';
import { HotelReviews } from '../../types/review';

type AppProps = {
  placesCount: number;
  offers: Offers;
  reviews: HotelReviews;
}

function App({placesCount, offers, reviews}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Main
              placesCount={placesCount}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room} element={<Room reviews={reviews} offers={offers}/>}>
          <Route
            path={AppRoute.RoomId}
            element={
              <Room reviews={reviews} offers={offers}/>
            }
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
