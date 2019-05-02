function Pessoa() {
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade);
        
    }/*.bind(this)*/, 1000)// Atribuindo this para a const self resolve o problema
}

 new Pessoa