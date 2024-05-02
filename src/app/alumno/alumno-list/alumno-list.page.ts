import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore, getDocs, limit, query, startAfter } from '@angular/fire/firestore';


@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.page.html',
  styleUrls: ['./alumno-list.page.scss'],
})
export class AlumnoListPage implements OnInit {

  constructor(private readonly firestore: Firestore) { }

  listaAlumnos = new Array();
  
  ngOnInit() {
    this.listarAlumnos();
  }

  
  
  listarAlumnos = () => {
    console.log("listar alumnos");
    const alumnosRef = collection(this.firestore, 'alumno');
  collectionData(alumnosRef, { idField: 'id'}).subscribe(respuesta=>{
      console.log("estos son los alumnos", respuesta);
      this.listaAlumnos=respuesta; 
    });
  
  }
 
  

}
