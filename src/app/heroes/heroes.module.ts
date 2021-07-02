import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HoroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:///que componentes va a estar en este modulo
    [
        HoroeComponent,
        ListadoComponent
    ],
    exports://que se va hacer public 
    [
        ListadoComponent
    ],
    imports:///van los modulos
    [
        CommonModule
    ]
})
export class HeroesModule
{

}