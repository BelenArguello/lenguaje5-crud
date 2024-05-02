import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, Firestore, doc, getDoc} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteDoc } from 'firebase/firestore';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.page.html',
  styleUrls: ['./alumno-edit.page.scss'],
})
export class AlumnoEditPage implements OnInit {
  id: any; //atributo que recibe el id del registro desde la ruta
  isNew : boolean=false;
  alumno: any={};
 

  constructor(
    private readonly firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute
    ){}
  

    //metodo de la interfaz OnInit
  ngOnInit() {
    //this.incluirAlumno();
    //this.editarAlumno( "oQ78gscN64hLtaFI16Fa" );
    this.route.params.subscribe((params:any) => {
      console.log("params", params);
      this.id = params.id;
      if(params.id == 'new'){
        this.isNew = true;
      }else{
        this.obtenerAlumno(this.id)
      }
      
    });
  }

 

  //EditarAlumno
  editarAlumno = () => {
    console.log("Aqui editar firebase");
    const document = doc(this.firestore, "alumno", this.id);

    updateDoc(document, {
      codigo : this.alumno.codigo,
      nombre : this.alumno.nombre,
      apellido : this.alumno.apellido,
    }).then(doc => {
      console.log("Registro Editado");
      this.router.navigate(['alumno-list']);
    }).catch(error=>{
     
    });
  }

  guardarAlumno = () => {
    if (this.isNew){
      this.incluirAlumno();
    }else{
      this.editarAlumno()
    }
  }

  incluirAlumno = () =>{
    console.log("Aqui incluir en firebase");
    let alumnosRef = collection(this.firestore, "alumno");

    addDoc(alumnosRef, {
      codigo : this.alumno.codigo,
      nombre : this.alumno.nombre,
      apellido : this.alumno.apellido,
    }).then(doc => {
      console.log("Registro Incluido");
      this.router.navigate(['alumno-list']);
    }).catch(error => {

    });
  }

  

  obtenerAlumno = (id: string) => {
    const document = doc(this.firestore, "alumno", id);
    getDoc(document).then(doc => {
      console.log("Registro a editar", doc.data());
      this.alumno = doc.data();
    });

  }

  // eliminar alumno
  eliminarAlumno = () => {
    console.log("Aqui eliminar en firebase");
    const document = doc(this.firestore, "alumno", this.id);
    deleteDoc(document).then( doc => {
      console.log("Registro Eliminado");
      // Redirigir a la lista de alumnos después de eliminar exitosamente
      this.router.navigateByUrl('/alumno-list');
    }).catch(error => {
      console.error("Error al eliminar el registro:", error);
    });
  }

  


}
