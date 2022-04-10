import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghrepos';
import { GhUser } from '../../models/ghuser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repos: GhRepos[] | null = null

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
      }
    )

    this.ghService.findUserRepos(this.username).subscribe(
      (infoRepos) => {
        this.repos = infoRepos
      }
    )
  }


}
