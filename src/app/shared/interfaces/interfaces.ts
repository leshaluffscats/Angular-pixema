export interface IFilterParams {
  yearTo: string | null;
  yearFrom: string | null;
  ratingFrom: string | null;
  ratingTo: string | null;
  genre: string | null;
}

export interface IMovie {
  genres: IMovieGenres[];
  name: string;
  poster: any;
  id: number;
}

export interface IMovieGenres {
  name: string
}

export interface IMoviePoster {
  previewUrl?: string;
  url: string;

}

export interface ISimilarMovie {
  id: number;
  name: string;
  poster: IMoviePoster;
}


