//interface
interface CamisetaBase{
  setColor(color);
  getColor();
}

// Decorador
function estampar(logo: string){
  return function(target: Function){
    target.prototype.estampado = function():void{
      console.log('Camiseta estampada con el logo de '+ logo);
    }
  }
}

//Llamamos al decorador, no se nececita ; para terminar
@estampar('Just do it')
// Clase (molde del objeto)
class Camiseta implements CamisetaBase {
  //Propiedades (Caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //Métodos (funciones o acciones del objeto)
  constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
      this.color = color;
      this.modelo = modelo;
      this.marca = marca;
      this.talla = talla;
      this.precio = precio;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
}

//Herencia HIJA
class Sudadera extends Camiseta{
  public capucha: boolean;

  setCapucha(capucha: boolean){
    this.capucha = capucha;
  }
  getCapucha():boolean{
    return this.capucha
  }
}

var camiseta = new Camiseta('Rojo', 'SKU001', 'H&M', 'CH', 599);
console.log(camiseta);
camiseta.estampar();

var sudadera_nike = new Sudadera('Azul', 'SKU002', 'Nike', 'M', 699);
sudadera_nike.setColor('Gris');
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
