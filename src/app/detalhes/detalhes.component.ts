import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../models/produto.model';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  id: string = '';
  produtos = { } as Produto;

  constructor(
    public dialogRef: MatDialogRef<DetalhesComponent>) { }

  ngOnInit(): void { }

  fecharDialog(): void { this.dialogRef.close(); }
}