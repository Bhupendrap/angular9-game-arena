import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  term = '';
  elements: any;
  private apiUrl = 'http://starlord.hackerearth.com/gamesarena';
  constructor(private http: HttpClient) {
    this.getData();
  }
  getData() {
     this.http.get(this.apiUrl).pipe(map((res: Response) => res)).subscribe(data => {
      this.elements = data;
    // tslint:disable-next-line: no-unused-expression
    }), (error) => console.log(error);
  }
}
