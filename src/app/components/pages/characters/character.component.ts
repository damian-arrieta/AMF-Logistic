import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from "@app/shared/interfaces/character.interface";
import { FormatGenderService } from "@app/shared/services/format-gender.service";
import { FormatStatusService } from "@app/shared/services/format-status.service";

@Component({
    selector:'app-character',
    template: `
    <div class="card m-2" [ngClass]="{'bg-white': character.status === 'Alive', 'bg-dark': character.status === 'Dead'}">
        <div class="row no-gutters">
            <div class="col-md-4">
                <a [routerLink]="['/character-detail', character.id]">
                <img [src]="character.image" [alt]="character.name" class="card-img-top img-fluid">
                </a>
            </div>
            <div class="col-md-8">
                <div class="card-body text-center">
                <div class="card-title">
                    <a class="text-decoration-none" [routerLink]="['/character-detail', character.id]">
                    <h2 class="character__name">{{character.name}}</h2>
                    </a>
                    <h6 class="character__gender">{{ gender.getGenderSpanish(character.gender) }}</h6>
                    <small class="text-muted">{{ status.getStatusSpanish(character.status) }}</small>
                </div>
            </div>
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./character.component.css']
})

export class CharacterComponent{
    @Input() character!: Character;

    constructor(public status: FormatStatusService, public gender: FormatGenderService) {}
}