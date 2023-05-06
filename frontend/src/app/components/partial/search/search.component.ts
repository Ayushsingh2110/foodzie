import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = ''
  constructor(activatedRoute:ActivatedRoute, private route:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchitem) this.searchText = params.searchitem
    })
   }

  ngOnInit(): void {
  }

  search(term:string):void{
    if(term) this.route.navigateByUrl('/search/'+term)
  }

}
