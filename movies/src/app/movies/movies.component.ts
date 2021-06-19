import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList :any[] = [];

  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    this.movies.getMoviesList().subscribe((mv:any)=>{ 
      this.moviesList = mv.data.movies;
      
    })
  }

  searchingFor(e){
    const v = e.target.value;
    console.log(v);
    
    this.movies.searchingFor(v).subscribe((mv:any)=>{ 
      if (mv.data.movie_count != 0) {
        this.moviesList = mv.data.movies;
      }
      
    })

  }

}
