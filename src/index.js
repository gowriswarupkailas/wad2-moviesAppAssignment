import AddMovieReviewPage from "./pages/addMovieReviewPage";
import SiteHeader from "./components/siteHeader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PopularActorsPage from "./pages/popularActorsPage";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";

import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; // NEW
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage"; // NEW
import TrendingMoviesPage from "./pages/trendingMoviesPage"; // NEW
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; // NEW

import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    }
  }
});

const App = () => {
  return (
    <Auth0Provider
    // domain="xxxxxxx.us.auth0.com"
    // clientId="XXXXXXXXXXXXX"
    // redirectUri={window.location.origin}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            {" "}
            <Switch>
              <Route
                exact
                path="/reviews/form"
                component={AddMovieReviewPage}
              />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route
                exact
                path="/movies/favorites"
                component={FavoriteMoviesPage}
              />
              <Route
                exact
                path="/movies/toprated"
                component={TopRatedMoviesPage}
              />
              <Route
                exact
                path="/movies/nowplaying"
                component={NowPlayingMoviesPage}
              />
              <Route
                exact
                path="/movies/trending"
                component={TrendingMoviesPage}
              />
              <Route
                exact
                path="/movies/upcoming"
                component={UpcomingMoviesPage}
              />
              <Route
                exact
                path="/person/popular"
                component={PopularActorsPage}
              />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Auth0Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
