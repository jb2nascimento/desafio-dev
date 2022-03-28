import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Transacao } from 'src/app/models/Transacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private loadingService: LoadingService) { }

  transacoes: Map<string, Array<Transacao>> = new Map<string, Array<Transacao>>();

  ngOnInit(): void {
    this.loadingService.show();
    this.findAll();
  }

  findAll(): void {
    this.homeService.findAllTransactions().subscribe(_transacoes => {
      this.transacoes = _transacoes;
      this.loadingService.hide();
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
    this.loadingService.show();
    this.homeService.uploadCnabFile(file).subscribe(res => {
      this.findAll();
    });
  }

}
