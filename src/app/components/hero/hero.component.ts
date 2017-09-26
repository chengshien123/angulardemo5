import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {LoggerService} from '../../services/logger.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heros: Array<{id: number ; name: string}>;

  constructor(private heroService: HeroService , private loggerService: LoggerService) {
    this.loggerService.log('Fetching heros...');
    this.heros = this.heroService.getHeros();


  }

  ngOnInit() {


  }

}
