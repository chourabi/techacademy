import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id;
  movie:any  = {};

  constructor(private route:ActivatedRoute,private movies:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.movies.getMovieById(this.id).subscribe((res:any)=>{
      console.log(res);
      
      this.movie = res.data.movie;
    })
  }

}
