import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // binding heroes component as a parent of hero detail component(child)
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}