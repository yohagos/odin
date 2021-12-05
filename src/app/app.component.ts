import { Component, Input, Output } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NameService]
})
export class AppComponent {
  public text: string = "";

  public responses: any;

  constructor(public nameService: NameService) { }

  public service() {
    this.nameService.post(this.text)/* .subscribe(
      (Response) => {
        this.responses = Response;
      }
    ) */
  }
}
