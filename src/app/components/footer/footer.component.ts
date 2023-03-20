import { Component } from "@angular/core";
@Component({
  selector:'component-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent{
  listBranch:string[]=[
    "assets/bao-hiem-aon.png",
    "assets/addidas.webp",
    "assets/kol.png"
  ]
}
