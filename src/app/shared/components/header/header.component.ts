import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

//Le pasamos parametros al componente
@Input () title!: string;
  
constructor() { }

  ngOnInit() {}

}
