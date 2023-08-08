import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 heroNames :string[]=['hulk','iroman','capitan america','thor']
  public deleteHero? :string
 removeLastHero():void{
 this.deleteHero = this.heroNames.pop();

 }
}
