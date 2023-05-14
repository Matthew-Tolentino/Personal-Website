import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollreveal]'
})
export class ScrollrevealDirective implements OnInit {
  @Input() speed: string | number = 2;
  @Input() direction: string = 'down';
  @Input() distance: string | number = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'opacity', '0');
    renderer.setStyle(el.nativeElement, 'transition', `all ${this.speed}s`);
  }

  ngOnInit() {
    this.setPos();

    console.log(this.speed, this.direction, this.distance);
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0)');
    }, 100);
  }

  setPos() {
    if (this.direction === 'down')
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(-${this.distance}px)`);
    else if (this.direction === 'up')
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(${this.distance}px)`);
    else if (this.direction === 'left')
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${this.distance}px)`);
    else if (this.direction === 'right')
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(-${this.distance}px)`);
  }
}
