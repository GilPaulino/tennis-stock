import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) {} 

  registrarConta(): void {
    const dialogRef = this.dialog.open(CadastroLoginComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}
