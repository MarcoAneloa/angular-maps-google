import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  marcadores:Marcador[]=[];

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) { 
    //const nuevoMarcador= new Marcador(51.678418,7.809007);
    //this.marcadores.push(nuevoMarcador);
    if(localStorage.getItem('marcadores')){
      this.marcadores= JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(!result){
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc= result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador Actualizado', 'Cerrar', {
        duration: 2000,
      });

    });
  }

  agregarMarcador(evento){
    console.log(evento);
    const coords:{lat:number,lng:number}= evento.coords;
    const nuevoMarcador= new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {
      duration: 2000,
    });
  }

  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {
      duration: 2000,
    });
  }

}
