describe("testando a calculadora", function(){
    var calculadora = null;
    beforeEach(function(){
        calculadora = new Calculadora();
    });

    describe("testando os metodos", function(){
        it("metodos existem", function(){
            expect(calculadora.somar).toBeDefined();
            expect(calculadora.subtrair).toBeDefined();
            expect(calculadora.multiplicar).toBeDefined();
            expect(calculadora.dividir).toBeDefined();
        });
    });

    describe("testando resultados", function(){
        it("testando soma", function(){
            expect(calculadora.somar()).toBeNull();
            expect(calculadora.somar(10)).toBeNull();
            expect(calculadora.somar("A", 10)).toBeNull();
            expect(calculadora.somar("a", "b")).toBeNull();
            expect(calculadora.somar(10, "a")).toBeNull();
            expect(calculadora.somar(Number("A"), "a")).toBeNull();
            
            expect(calculadora.somar(10, 10)).toEqual(20);
            expect(calculadora.somar(10.5, 10.5)).toEqual(21);
            expect(calculadora.somar(10.9, 0)).toBeCloseTo(10.9);
        });

        it("testando divisao", function(){
            expect(calculadora.dividir()).toBeNull();
            expect(calculadora.dividir(10)).toBeNull();
            expect(calculadora.dividir("A", 10)).toBeNull();
            expect(calculadora.dividir("a", "b")).toBeNull();
            expect(calculadora.dividir(10, "a")).toBeNull();
            expect(calculadora.dividir("10", "10")).toBeNull();
            expect(calculadora.somar(Number("A"), "a")).toBeNull();
            
            
            expect(calculadora.dividir(10, 10)).toEqual(1);
            expect(calculadora.dividir(10.5, 2)).toBeCloseTo(5.25);
            expect(calculadora.dividir(10.9, 0)).toBeNull();
        });

        it("testando soma", function(){
            expect(calculadora.subtrair()).toBeNull();
            expect(calculadora.subtrair(10)).toBeNull();
            expect(calculadora.subtrair("A", 10)).toBeNull();
            expect(calculadora.subtrair("a", "b")).toBeNull();
            expect(calculadora.subtrair(10, "a")).toBeNull();
            expect(calculadora.somar(Number("A"), "a")).toBeNull();
            
            expect(calculadora.subtrair(10, 10)).toEqual(0);
            expect(calculadora.subtrair(10, 11)).toEqual(-1);
            expect(calculadora.subtrair(10.5, 10.2)).toBeCloseTo(0.3);
            expect(calculadora.subtrair(10.9, 0)).toBeCloseTo(10.9);
            expect(calculadora.subtrair(0, 10.9)).toBeCloseTo(-10.9);
        });

        it("testando soma", function(){
            expect(calculadora.multiplicar()).toBeNull();
            expect(calculadora.multiplicar(10)).toBeNull();
            expect(calculadora.multiplicar("A", 10)).toBeNull();
            expect(calculadora.multiplicar("a", "b")).toBeNull();
            expect(calculadora.multiplicar(10, "a")).toBeNull();
            expect(calculadora.somar(Number("A"), "a")).toBeNull();
            
            expect(calculadora.multiplicar(10, 10)).toEqual(100);
            expect(calculadora.multiplicar(10.5, 10.5)).toBeCloseTo(110.25);
            expect(calculadora.multiplicar(10.9, 0)).toEqual(0);
            expect(calculadora.multiplicar(0, 10.9)).toEqual(0);
        });
    });
});