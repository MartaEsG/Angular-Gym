import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [ {
  path: "", component: HomeComponent
}, 
{path: "clases", component: ClasesComponent
},
{path: "añadir", component: AddClassComponent
},
{path: "editar", component: EditClassComponent
},
{path: "usuarios", component: UsuariosComponent
},
{path: "clases/:id", component: ClaseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
