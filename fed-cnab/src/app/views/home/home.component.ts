import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { Transacao } from 'src/app/models/Transacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  transacoes: Map<string, Array<Transacao>> = new Map<string, Array<Transacao>>();

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.homeService.findAllTransactions().subscribe(_transacoes => {
      this.transacoes = _transacoes;
    });
  }

  getSaldoEmConta(transacoes: Array<Transacao>): number {

    let somar: number = 0;
    let subtrair: number = 0;

    transacoes.forEach(tr => {
      if (tr.natureza == '+') somar += parseFloat(tr.valor.toString());
      else subtrair += parseFloat(tr.valor.toString());
    });

    return somar - subtrair;
  }

  uploadFile(file: File) {
    this.homeService.uploadCnabFile(file).subscribe(res => {
      this.findAll();
    });
  }

}
