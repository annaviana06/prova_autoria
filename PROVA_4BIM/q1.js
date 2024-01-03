//DESTRUCTURING

const formatarContato = (contato) => {
    let {nome, email, telefone} = contato;
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
}

console.log(formatarContato({nome: "Anna Beatriz", email:"anna.beatriz@example.com", telefone: "123456789"}));


//OU


/*function formatarContato(contato) {
    let {nome, email, telefone} = contato;
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
}

console.log(formatarContato({nome: "Anna Beatriz", email:"anna.beatriz@example.com", telefone: "123456789"}));*/