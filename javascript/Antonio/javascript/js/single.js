var Singleton =(function (){
    var instancia;

    return function(){
        if(instancia){
            return instancia;
        }
        instancia = this;
    }
}());

singleton1 = new Singleton();
singleton2 = new Singleton();

singleton1.idUsuario = 25;

console.log(singleton1);
console.log(singleton2);