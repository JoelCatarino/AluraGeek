const listaProdutos = () => {
  fetch("http://localhost:3000/produtos")
    .then((resposta) => resposta.json())
    .catch((err) => console.log(err));
};

export const produtos = {
  listaProdutos,
};
