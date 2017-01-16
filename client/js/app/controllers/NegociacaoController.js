/**
 * Created by eduardo on 16/01/17.
 */
class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona (event){
        event.preventDefault();

        let data = new Date(
            ...this._inputData
                .value
                .split('-')
                .map((item, index) => item - index % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao.dataFormatada);

    }

}