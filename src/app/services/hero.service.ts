import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  heros: Array<{ id: number; name: string }> = [
    { id: 11, name: 'Mr. Nice11' },
    { id: 12, name: 'Narco11' },
    { id: 13, name: 'Bombasto11' },
    { id: 14, name: 'Celeritas11' },
    { id: 15, name: 'Magneta11' }
  ];

  getHeros() {
    return this.heros;
  }


  constructor() { }

}
