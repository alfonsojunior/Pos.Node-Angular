import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  item = { id: 'nada' };
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProdutosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carrega(params['id']);
    });
  }

  carrega(id: string) {
    this.id = id;
    if (this.id === 'novo') {
      return;
    }
    this.item.id = id; // vamos trocar por carregar o produto
  }

  onSubmit(form) {}

}
