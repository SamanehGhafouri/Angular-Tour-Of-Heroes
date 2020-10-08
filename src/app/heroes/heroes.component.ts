import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    //Retrieve the heroes from the service
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    // call the getHeroes here
    this.getHeroes();

  }

}
