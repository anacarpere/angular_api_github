import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghuser';
import { GhRepos } from '../models/ghrepos';

@Injectable()
export class GhApiService {

  private readonly baseurl: string = "https://api.github.com/users"

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseurl}/${username}`)
  }

  findUserRepos(username: string): Observable<GhRepos[]>{
    return this.http.get<GhRepos[]>(`${this.baseurl}/${username}/repos`)
  }

}
