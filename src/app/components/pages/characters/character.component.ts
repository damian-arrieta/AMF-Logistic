import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from "@app/shared/interfaces/character.interface";

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
                    <h2>{{character.name}}</h2>
                    </a>
                    <h4 class="text-muted">{{character.gender}}</h4>
                    <small class="text-muted">{{character.status}}</small>
                </div>
            </div>
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input() character!: Character;
}