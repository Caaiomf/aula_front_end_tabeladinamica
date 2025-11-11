/* criar um dataset, usar o vetor de objeto (simula json) em que a parte front-end vai usar  e esses dados, quando usado profissionalmente vem do back-end de uma cama de persistencia (banco de dados), normalmente a forma utilizada é com json ou XML ou CSV, ...*/
var vetAlunos = [
    {ra:123, nome:'Rafael', curso:'ADS'},
    {ra:321, nome:'Guilherme', curso:'ADS'},
    {ra:456, nome:'Matheus', curso:'ADS'},
    {ra:654, nome:'João Paulo', curso:'BCC'},
    {ra:789, nome:'Gabriel', curso:'BSI'}   
]

function carregarTabela(dados){
    //vincular o elemento <table> do HTML a uma variavel
    let tab = document.querySelector('#tabela');
    // criar uma linha do cabeçalho da tabela
    let trCabecalho = document.createElement('tr');
    // criar as colunas do cabeçalho 
    let thRA = document.createElement('th');
    let thNome = document.createElement('th');
    let thCurso = document.createElement('th');
    //colocar texto em cada coluna do cabeçalho
    thRA.innerText = 'RA';
    thNome.innerText = 'Nome do aluno';
    thCurso.innerText = 'Curso';
    //Adicionar cada coluna na linha do cabeçalho
    trCabecalho.appendChild(thRA);
    trCabecalho.appendChild(thNome);
    trCabecalho.appendChild(thCurso);
    //adicionar a linha na tabela
    tab.appendChild(trCabecalho);
    //agora a gente precisa carregar os dados do vetor de objetos na tabela, criando uma linha para cada objeto aluno
    for(let i = 0 ; i<dados.length ; i++){
        //criar uma linha e as colunas para cada campo do objeto
        trLinha = document.createElement('tr');
        let tdRA = document.createElement('td');
        let tdNome = document.createElement('td');
        let tdCurso = document.createElement('td');

        tdRA.innerText = dados[i].ra;
        tdNome.innerText = dados[i].nome;
        tdCurso.innerText = dados[i].curso;
        trLinha.appendChild(tdRA);
        trLinha.appendChild(tdNome);
        trLinha.appendChild(tdCurso);
        tab.appendChild(trLinha);
    }

}

function adicionarItem(){
    //pegar os dados que foram digitados nos inputs e adicionar a tabela
    let vRa = document.querySelector('#ra').value;
    let vNome = document.querySelector('#name').value;
    let vCurso = document.querySelector('#course').value;
    //salver o novo aluno no vetor
    vetAlunos.push({ra:vRa,nome:vNome,curso:vCurso});
    // apagar todo o conteudo da tabela
    document.querySelector('#tabela').innerHTML='';
    // chamar a função para carregar  a tabela
    carregarTabela2(vetAlunos);
}
//agora vamos usar uma forma mais profissional para carregar os dados do vetor e criar as linhas e colunas da tabela - vamos usar Literal String ou template string
function carregarTabela2(dados){
    //vincular o elemento <table> do HTML a uma variavel
    let tab = document.querySelector('#tabela');
    // criar uma variavel string para receber os comandos em HTML para serem renderizados pelo Browser
    html = `<tr>
                <th> RA </th>
                <th> Nome do ALuno</th>
                <th> Curso </th>
            </tr>`;
    //percorrer o vetor e criar uma linha para cada aluno
    for(let aluno of dados){
            html += `<tr>
                        <th> ${aluno.ra} </th>
                        <th> ${aluno.nome}</th>
                        <th> ${aluno.curso} </th>
                    </tr>`;
    }


    tab.innerHTML = html;
}