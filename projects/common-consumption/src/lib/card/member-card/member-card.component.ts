import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardClick } from '../models';

@Component({
  selector: 'sb-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  paletteList:any = ["#FE0030","#7B1FA2","#0097A7","#7B1FA2",
  "#F57C00","#1976D2","#CDDC39","#FE0030","#F57C00","#388E3C"];

  @Input() title:string;
  @Input() isAdmin: boolean;
  @Input() isMenu: boolean;
  @Input() menuOptions: string[];
  @Input() indexOfMember: number;
  @Input() initial: number;
  @Input() identifier: string;

  @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fetchStyle() {
    if(this.indexOfMember > 10) {
      this.indexOfMember = this.indexOfMember % 10;
    }
    return {
      'border-color': this.paletteList[this.indexOfMember],
      'color': this.paletteList[this.indexOfMember]
    };
  }
  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: {title: this.title} });
 }
 onMenuClick(event: MouseEvent) {
  this.menuClick.emit({ event: event, data: {identifier:this.identifier} });
 }

}