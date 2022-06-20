import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieTopRated } from 'src/app/interfaces/movie-top-rated';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.page.html',
  styleUrls: ['./top-rated.page.scss'],
})
export class TopRatedPage implements OnInit {

  public list: MovieTopRated[ ] = [];
  public page: number = 1;

  constructor(private movie: MoviesService) { }

  ngOnInit() {
    this.list = [];
    this.movie.TopRated(this.page).toPromise().then(res =>{
      const data:any = res;
      data.results.forEach(item => {
        this.list.push({
          poster_path: item.poster_path,
          title: item.title
        });
      });
      console.log(this.list)
    }).catch(err=>{
      console.log(err)
    })
  }

  async loadData(event){

      this.page++;

      const res = await this.movie.TopRated(this.page).toPromise();
      const data:any = res;
        data.results.forEach(item => {
          this.list.push({
            poster_path: item.poster_path,
            title: item.title
          });
        });


      event.target.complete();
      
      if (this.list.length === 1000) {
        event.target.disabled = true;
      }
  }

}
