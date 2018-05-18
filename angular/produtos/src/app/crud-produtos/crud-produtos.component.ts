import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-produtos',
  templateUrl: './crud-produtos.component.html',
  styleUrls: ['./crud-produtos.component.css']
})
export class CrudProdutosComponent implements OnInit {

  lista = [];
  produto = {};

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.produtosService.consulta()
      .then( (resposta) => { this.lista = resposta.json(); } )
      .catch( (erro) => { console.log(erro); } );
  }

  limpar() {
    this.produto.nome = "";
  }

  inserir() {
    this.produtosService.add(this.produto)
      .then( (prod) => { this.lista.push(prod.json()) } )
      .catch( (erro) => { console.log(erro); } );
  }

  alterar() {}

}
