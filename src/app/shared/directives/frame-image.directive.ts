import { Directive, ElementRef, OnInit, Input, HostListener, Renderer2 } from "@angular/core";

@Directive({
	selector: "[FrameImage]"
})
export class FrameImageDirective implements OnInit {

	@Input() frameType : string;

	frameHeight: any;
	frameWidth: any;
	frameRatio: any;
	frameCondition: boolean;
	imgHeight: any;
	imgWidth: any;
	imgRatio: any;
	imgMarginTop: any;
	imgMarginLeft: any;
	imgWidthAttr: any;
	imgHeightAttr: any;
	
	constructor(private el: ElementRef , private render: Renderer2) {}

	// onWindowScroll() {

	ngOnInit(): void {
		return this.calculateImageFrame();
	}

	@HostListener("load", []) calculateImageFrame() {
		
		this.render.addClass(this.el.nativeElement, 'preFadeIn');
		this.render.addClass(this.el.nativeElement.parentNode, 'frame');
		
		// Height and width of parent (frame)
		this.frameHeight = this.el.nativeElement.parentNode.offsetHeight;
		this.frameWidth = this.el.nativeElement.parentNode.offsetWidth;	

		// Height and width of image
​	 	 this.imgHeight = this.el.nativeElement.offsetHeight;
​	 	 this.imgWidth = this.el.nativeElement.offsetWidth;

		// Get Frame Ratio
		this.frameRatio = this.frameWidth / this.frameHeight;
		
		//Get Image Ratio
		this.imgRatio = this.imgWidth / this.imgHeight;

		if (this.frameType =='fit') {
			// Fit inside frame
			this.frameCondition = this.imgRatio > this.frameRatio;
		} else {
			// Fill frame
			this.frameCondition = this.imgRatio < this.frameRatio;
		}

		// Determine Image/Frame Relationship
​	 	 if (this.frameCondition) {
			this.imgWidthAttr = this.frameWidth;
			this.imgHeightAttr = this.imgHeight * (this.frameWidth / this.imgWidth);
		} else {
			this.imgWidthAttr = this.imgWidth * (this.frameHeight / this.imgHeight);
			this.imgHeightAttr = this.frameHeight;
		}
		​
		// Set Size
		this.el.nativeElement.style.width = this.imgWidthAttr + "px";

		
		this.el.nativeElement.style.height = this.imgHeightAttr + "px";

		this.render.setStyle(this.el.nativeElement, 'width', this.imgWidthAttr);
		this.render.setStyle(this.el.nativeElement, 'height', this.imgHeightAttr);
		
		// Set Position

		this.imgMarginTop = this.imgHeightAttr / 2 * -1 + this.frameHeight / 2 + "px";

		this.imgMarginLeft = this.imgWidthAttr / 2 * -1 + this.frameWidth / 2 + "px";

		this.render.setStyle(this.el.nativeElement, 'margin-top', this.imgMarginTop);
		this.render.setStyle(this.el.nativeElement, 'margin-left', this.imgMarginLeft);
		// this.el.nativeElement.style.marginTop = this.imgHeightAttr / 2 * -1 + this.frameHeight / 2;
		// this.el.nativeElement.style.marginLeft = this.imgWidthAttr / 2 * -1 + this.frameWidth / 2;
		
		// Fade in
		this.render.addClass(this.el.nativeElement, 'fadeIn');

		// Hide Loadee
		this.render.addClass(this.el.nativeElement.parentNode, 'hideLoadee');
				​
	}

};
