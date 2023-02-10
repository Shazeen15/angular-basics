import { 
  Component, 
  Input, 
  EventEmitter, 
  Output,
  OnInit,
  OnChanges,
  DoCheck, 
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // life cycle hook
  constructor(){
    console.log("post constructor called with postImg: ", this.postImg)
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges postImg: ", this.postImg)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck postImg: ", this.postImg)
  }

  // life cycle hook
  ngOnInit(){
    console.log("post ngonInit called with postImg: ", this.postImg)
  }

  @Input("img") postImg = ""
  @Output() imgSelected = new EventEmitter<string>()
}
