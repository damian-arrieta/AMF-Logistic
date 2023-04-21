import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character.component';
import { FormatStatusService } from '@app/shared/services/format-status.service';

const components = [CharacterDetailComponent, CharacterListComponent, CharacterComponent];

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...components ],
  providers: [
    FormatStatusService
  ]
})
export class CharactersModule { }
