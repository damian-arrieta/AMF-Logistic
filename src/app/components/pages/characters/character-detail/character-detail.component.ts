import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character> = new Observable<Character>();

  constructor(private route: ActivatedRoute, private characterSvc: CharacterService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe((params: any) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }  

  goBack(): void{
    this.location.back();
  }
}
