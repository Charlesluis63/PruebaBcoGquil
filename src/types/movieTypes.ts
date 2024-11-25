type Movie = {
    poster_path: string | null;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;

    // adult: boolean;
    // backdrop_path: string | null;
    // genre_ids: number[];
    // id: number;
    // original_language: string;
    // original_title: string;
    // popularity: number;
    // video: boolean;
    // vote_count: number;
  };
  
  type MovieApiResponse = {
    page: number;
    results: Movie[];
  };