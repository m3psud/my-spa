import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef:  TemplateRef<any>
  
  ) { }
 @Input ('appSearch') set render(times : Number){
   this.viewContainer.clear();
   for(let i = 0; i < times; i++){
     this.viewContainer.createEmbeddedView(this.templateRef,{
      index:i 
      
     });


   }

 }
}

 
