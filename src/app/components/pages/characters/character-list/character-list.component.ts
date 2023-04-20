import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/interfaces/character.interface';
import { take, filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

type RequestInfo = {
  next: string | null;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;

  private query;

  constructor(private characterSvc: CharacterService, private route: ActivatedRoute, private router: Router) {
    this.query = '';
  }  

  ngOnInit(): void {
    this.getCharactersByQuery();
    this.onUrlChanged();
  }

  private onUrlChanged(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(
      () => {
        console.log('Busando desde la URL')
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      }
    )
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      console.log('Buscando desde el query');
      this.query = params['q'];
      this.pageNum = 1;
      this.getDataFromService();
    });
  }

  private getDataFromService(): void{
      this.characterSvc.searchCharacters(this.query, this.pageNum).pipe(
        take(1)
      ).subscribe((res: any) => {
        if(res?.results?.length) {
          const { info, results } = res;
          this.characters = [ ...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }  
}
