const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test("Verifica se string esta sendo invertida.", async () => {
        expect(utilitarios.inverterString('Teste')).toBe('etseT');
    });

    test("Verifica se esta contando a sring corretamente.", async () => {
        expect(utilitarios.contarCaracteres('Teste')).toBe(5);
    });

    test("Verifica se esta alterando a string para Maiusculas", async () => {
        expect(utilitarios.paraMaiusculas('teste')).toBe('TESTE');
    });

    test("Verifica se esta alterando a string para Minusculas", async () => {
        expect(utilitarios.paraMinusculas('TESTE')).toBe('teste');
    });

    test("Verifica se esta alterando a primeira letra para Maiuscula", async () => {
        expect(utilitarios.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test("Verifica se esta alterando a primeira letra para Maiuscula", async () => {
        expect(utilitarios.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test("Verifica se esta somando os numeros corretamente", async () => {
        expect(utilitarios.somar(5, 5)).toStrictEqual(10);
    });

    test("Verifica se esta subtraindo os numeros corretamente", async () => {
        expect(utilitarios.subtrair(10, 5)).toStrictEqual(5);
    });

    test("Verifica se esta multiplicando os numeros corretamente", async () => {
        expect(utilitarios.multiplicar(10, 5)).toStrictEqual(50);
    });

    test("Verifica se esta dividindo os numeros corretamente", async () => {
        expect(utilitarios.dividir(10, 2)).toStrictEqual(5);
    });

    test("Verifica se o numero é par", async () => {
        expect(utilitarios.ehPar(2)).toBe(true);
    });

    test("Verifica o primeiro elemento da lista/string", async () => {
        expect(utilitarios.primeiroElemento('Teste')).toBe('T');
    });

    test("Verifica o ultimo elemento da lista/string", async () => {
        expect(utilitarios.ultimoElemento('Teste')).toBe('e');
    });

    test("Verifica o tamanho da lista/string", async () => {
        expect(utilitarios.tamanhoArray('Teste')).toStrictEqual(5);
    });

    test("Verifica se esta é numero", async () => {
        expect(utilitarios.ehNumero(5)).toBe(true);
    });

    test("Verifica se esta removendo espaços", async () => {
        expect(utilitarios.removerEspacos('   Teste   ')).toBe('Teste');
    });

    test("Verifica se esta repetindo o texto", async () => {
        expect(utilitarios.repetirTexto('Teste', 3)).toBe('TesteTesteTeste');
    });

    test("Verifica se esta juntando o array", async () => {
        expect(utilitarios.juntarArray([1, 2, 3, 4, 5])).toBe("1,2,3,4,5");
    });

    test("Verifica se esta contando as palavras", async () => {
        expect(utilitarios.contarPalavras('Teste')).toBe(1);
    });

    test("Verifica a quantidade de palavras", () => {
        expect(utilitarios.contarPalavras("Teste Teste Teste")).toBe(3);
    });

    test("Verifica a media array", () => {
        expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toEqual(3);
    });

    test("Verifica se remove os numeros duplicados", () => {
        expect(utilitarios.removerDuplicados([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test("Verifica se a palavra é Palindromo", () => {
        expect(utilitarios.ehPalindromo("radar")).toBe(true);
    });

    test("Verifica se esta mesclando os objetos", () => {
        const obj01 = { nome01: "Teste" };
        const obj02 = { nome02: "Top" };
        const resultado = utilitarios.mesclarObjetos(obj01, obj02);
        expect(resultado).toEqual({ nome01: "Teste", nome02: "Top" });
    });
}); 