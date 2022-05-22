var auto = {
    marca: 'Mazda',
    modelo: '3',
    color: 'Rojo',
    annio: '2022',
    transmision: 'Automatica',
    cambiaColor: function(nuevoColor){
        //auto.color = nuevoColor;
        this.color = nuevoColor;
    }
}

auto.cambiaColor('Gris');

console.log(auto);