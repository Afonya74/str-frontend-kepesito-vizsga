import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL =
    'https://tr360-frontend-exam-april.azurewebsites.net/Afonya74/movies';

  constructor(undefined) {}

  getMovieList(): any {
    return null;
  }

  deleteMovie(id): any {
    return null;
  }
}
