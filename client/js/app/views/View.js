/**
 * Created by eduardo on 17/01/17.
 */
class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    update(modelo){
        this._elemento.innerHTML = this.template(modelo);
    }

    template (modelo) {
        throw new Error('O método template deve ser herdado');
    }

}