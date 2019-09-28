class Calculadora{
    somar(n1, n2){
        if((typeof n1)!="number" || (typeof n2)!="number" || isNaN(n1) || isNaN(n2))
        {
            return null;
        }
        else
        {
            return n1+n2;
        }
    };
    subtrair(n1, n2){
        if((typeof n1)!="number" || (typeof n2)!="number" || isNaN(n1) || isNaN(n2))
        {
            return null;
        }
        else
        {
            return n1-n2;
        }
    };
    multiplicar(n1, n2){
        if((typeof n1)!="number" || (typeof n2)!="number" || isNaN(n1) || isNaN(n2))
        {
            return null;
        }
        else
        {
            return n1*n2;
        }
    };
    dividir(n1, n2){
        if((typeof n1)!="number" || (typeof n2)!="number" || n2 == 0 || isNaN(n1) || isNaN(n2))
        {
            return null;
        }
        else
        {
            return n1/n2;
        }
    };
};