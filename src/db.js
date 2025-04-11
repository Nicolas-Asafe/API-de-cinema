let db = {
    filmesNoCatagolo:[],
    Combos:[
        {
          "id": 1,
          "nome": "Combo Clássico",
          "descricao": "Pipoca média com refrigerante 500ml",
          "preco": 22.90,
          "itens": {
            "pipoca": "Média",
            "refrigerante": "500ml"
          }
        },
        {
          "id": 2,
          "nome": "Combo Duplo",
          "descricao": "2 pipocas médias e 2 refrigerantes 500ml",
          "preco": 42.00,
          "itens": {
            "pipoca": "2 Médias",
            "refrigerante": "2x 500ml"
          }
        },
        {
          "id": 3,
          "nome": "Combo Família",
          "descricao": "Pipoca grande + 2 refrigerantes 700ml",
          "preco": 49.90,
          "itens": {
            "pipoca": "Grande",
            "refrigerante": "2x 700ml"
          }
        },
        {
          "id": 4,
          "nome": "Combo Kids",
          "descricao": "Pipoca pequena com refrigerante 300ml",
          "preco": 15.00,
          "itens": {
            "pipoca": "Pequena",
            "refrigerante": "300ml"
          }
        },
        {
          "id": 5,
          "nome": "Combo Premium",
          "descricao": "Pipoca grande com manteiga + refri 1L",
          "preco": 29.90,
          "itens": {
            "pipoca": "Grande com manteiga",
            "refrigerante": "1L"
          }
        }
    ],
    users:[]
}

export default db