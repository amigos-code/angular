import { Directive , ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element : ElementRef) {
    //It is not recommended because we put timeout and due to that after DOM is loaded this 
    //directive comes in action.
  //   //NEVER DO THIS !!!
  //   setTimeout(() => {
  //     this.element.nativeElement.style.backgroundColor=this.backgroundColor; 
  // },50);
  
  }
  //Here inside appClass means , we have used appClass in our template and when Angular encounter
  //appClass in out template then it will appClass and which in turn pass control to  
  //set backgroudColor.
  // @Input('appClass') set backgroundColor(color:string){
  //   this.element.nativeElement.style.backgroundColor=color; 
  // }
  @Input('appClass') set ClassNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
