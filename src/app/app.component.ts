import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface CatFact {
  fact: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HttpClientModule, CommonModule],
})
export class AppComponent {
  private httpClient = inject(HttpClient);

  catFact$: Observable<CatFact> = this.loadFact();

  loadFact(): Observable<CatFact> {
    return this.httpClient.get<CatFact>('https://catfact.ninja/fact');
  }
}
