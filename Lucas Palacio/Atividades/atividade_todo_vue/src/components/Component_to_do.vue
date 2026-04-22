<template>
<div id="app">
<h2>Minha lista de Tarefas</h2>
<div class="todo-container">
    <input type="text"
    v-model="novaTarefa"
    placeholder="Digite uma tarefa..."
    @keyup.enter="adicionarTarefa"
    >
    <button @click="adicionarTarefa">Adicionar</button>
    </div>
    <ul>
        <li v-for="(tarefa, index) in tarefas" :key="index">
            <span :class="{concluida: tarefa.finalizada}">
                {{ tarefa.texto }}
            </span>

            <div class="acoes">
                <button @click="marcarConcluida">{{ tarefa.finalizada ?'Desfazer' : 'Concluir' }}
                </button>
                <button @click="removerTarefa" class="btn-remover">Remover</button>
            </div>
        </li>
</ul>
</div>
</template>

<script>
export default{
    data(){
        return {
            novaTarefa:"",
            //lista inicial de objetos
            tarefas: [
                {texto: "Estudar vue 3", finalizada:false},
                {texto: "Fazer café", finalizada:true}
            ]
        };
    },
    methods:{
        adicionarTarefa(){
            //validação para não adcionar texto vazio
             if (this.novaTarefa.trim() !== "") {
                this.tarefas.push({
                    texto:this.novaTarefa,
                    finalizada:false
                });
                this.novaTarefa = "";//limpa o input
            }
        },
        marcarConcluida(){
            //inverte o status de finalizada
            this.tarefas.finalizada = !this.tarefas.finalizada;
        },
        removerTarefa(){
            //remove o item do array pelo índice
            this.tarefas.splice(1);
        }
        
       
    }
};
</script>

<style scoped>
 .todo-container{
    max-width: 400px;
    margin: 20px auto;
    font-family: Arial, Helvetica, sans-serif;
 }

 .input-group{
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
 }

 input{
    flex: 1;
    padding: 8px;
 }

 ul{
    list-style: none;
    padding: 0;
 }
 li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
 }
 .concluida{
    text-decoration: line-through;
    color: #888;
 }

 .acoes{
    display: flex;
    gap: 5px;
 }

 .btn-remover{
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

 }
</style>