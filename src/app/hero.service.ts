import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // define the heroesUrl of the form :base/:collectionName
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // because we call MessageService frequently, we wrap it in a private log() method
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  // get heroes uses RxJS of function to return an array of mock heroes
  // getHeroes(): Observable<Hero[]>{
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  getHero(id: number): Observable<Hero>{
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  //get heroes with HttpClient
  //get heroes from the server
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
