import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dvtImportant]'
})
export class ImportantDirective implements OnInit {

  @Input() dvtImportant: string;

  constructor(private eTarget: ElementRef) { }

  ngOnInit() {
    console.log('Aplicando directiva de prueba');
    console.log(this.eTarget);
    const html = `¡${this.dvtImportant}!: ` + this.eTarget.nativeElement.innerHTML;
    this.eTarget.nativeElement.innerHTML = html;
  }

  @HostListener ('click')
  cambiaColor() {
    this.eTarget.nativeElement.style = 'background-color: lightCoral';
  }
}
