import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
codigo = 7891962051079;
resultado: any;
  constructor( public http: HttpClient) {
    this.getvalue();
  }
  getvalue(){
    this.http.get(`https://menorpreco.notaparana.pr.gov.br/api/v1/produtos?local=6g7zp7qk6&gtin=7891962051079&offset=0&raio=2&data=-1&ordem=0`).subscribe((data: any) => {
      this.resultado = data.produtos;
      

    }, (err: any) => {
      console.error(err);
    })

  }

}
