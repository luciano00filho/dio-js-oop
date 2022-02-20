/**
 * Classe JS para conta bancária.
 */
class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;        
    }

    set saldo(valor){
        this._saldo = valor;        
    }

    sacar(valor){
        if(valor > this._saldo) return "Operação negada.";
        
        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}


/**
 * Classe JS para conta-corrente.
 */
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

/**
 * Classe JS para conta-poupança.
 */
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

/**
 * Classe JS para conta universitária.
 */
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500) return "Operação negada.";
        this._saldo -= valor;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1,234,true);
console.log(minhaConta);
console.log(minhaConta.saldo);
console.log(minhaConta.depositar(1500));
console.log(minhaConta.sacar(250));
console.log(minhaConta.sacar(1300));


const contaPoup = new ContaPoupanca(1,235);
console.log(contaPoup);
console.log(contaPoup.saldo);
console.log(contaPoup.depositar(1500));
console.log(contaPoup.sacar(375));


const contaUniv = new ContaUniversitaria(1,236);
console.log(contaUniv);
console.log(contaUniv.saldo);
console.log(contaUniv.depositar(1500));
console.log(contaUniv.sacar(501));
console.log(contaUniv.sacar(500));