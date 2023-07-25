import { IMovieInitialState } from './reducers/movies.reducer';
import { IThemeInitialState } from './reducers/theme.reducer';

export interface AppState {
  movies: IMovieInitialState;
  theme: IThemeInitialState;
}
