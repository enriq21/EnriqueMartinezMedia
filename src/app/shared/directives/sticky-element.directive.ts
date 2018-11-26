import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[StickyElement]'
})
export class StickyElementDirective {

  private IsSticky: boolean = true;
  private selectedOffset: number = 0;
  private windowOffsetTop: number = 0;

  @Input() addClass: string = 'sticky';
  @Input() offSet: number = 0;

  constructor( private el: ElementRef , private render: Renderer2 ) { 
  }

  private addSticky() {
    this.IsSticky = true;
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = this.offSet + 'px';
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.IsSticky = false;
    this.el.nativeElement.style.position = '';
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    let offset: number = this.el.nativeElement.offsetTop;
    this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.selectedOffset === 0) {
      this.selectedOffset = offset;
    }

    if (this.IsSticky === false) {
      this.selectedOffset = offset;
    }

    if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {
      this.addSticky();
      this.el.nativeElement.parentElement.style.marginTop = this.el.nativeElement.clientHeight + 'px';
    } else {
      this.removeSticky();
      this.el.nativeElement.parentElement.style.marginTop = "unset";
    }
  }

}
