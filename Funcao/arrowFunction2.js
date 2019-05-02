function Pessoa() {
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade);
        
    }, 1000)// Usando uma function arrow o this não varia
}

 new Pessoa