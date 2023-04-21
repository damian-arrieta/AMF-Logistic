import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { FormatStatusService } from '@app/shared/services/format-status.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule
  ],
  providers: [
    FormatStatusService
  ]

})
export class CharacterDetailModule { }
