import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string ='iroman';
  public age:number = 45;

  get capitalizedName():string{
 return this.name.toUpperCase()
  }

  getHeroDescription():string{
 return `${this.name} - ${this.age}`
  }

   changeHero():void{
    this.name = 'spiderman'
   }
   changeAge():void{
    this.age = 35
   }
   reset():void{
    this.age = 45
    this.name ='iroman'
   }


}
