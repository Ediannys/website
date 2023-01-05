import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private router: Router) { }

  public scrollRight(id: string, i:number): void {
    const element = <HTMLElement>document.querySelector(`#${id}`);
    let divWidth = element.scrollWidth;
    let x = divWidth * i
    element.scrollTo(x, 0);
  }
}