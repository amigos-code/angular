import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
  selector: "[appDirective]",
})
export class DirectiveDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appDirective') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
