import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // binding heroes component as a parent of hero detail component(child)
  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    //route.snapshot: is a static image of the route info shortly after the component was created.
    //paramMap: is a dictionary of route parameter values extracted from the URL
    //'id': key returns the id of the hero to fetch
    // +: converts the string to a number, which is what a hero id should be. Route parameters always strings.

    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void{
    this.location.back();
  }

  // save the hero name after update
  save():void{
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());

  }


}
