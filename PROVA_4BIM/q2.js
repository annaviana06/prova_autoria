// ARROW FUNCTION

const capitalizarTitulos = (livros) => {
    return livros.map(livros => livros.toUpperCase());

}

console.log(capitalizarTitulos(["o pequeno príncipe", "dom casmurro", "a metamorfose"]));
