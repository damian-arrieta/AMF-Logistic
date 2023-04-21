import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { FormatStatusService } from '@app/shared/services/format-status.service';
import { FormatGenderService } from '@app/shared/services/format-gender.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule
  ],
  providers: [
    FormatStatusService,
    FormatGenderService
  ]

})
export class CharacterDetailModule { }
