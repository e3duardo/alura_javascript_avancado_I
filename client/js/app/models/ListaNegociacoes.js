/**
 * Created by eduardo on 16/01/17.
 */
class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes (){
        return [].concat(this._negociacoes);
    }
}