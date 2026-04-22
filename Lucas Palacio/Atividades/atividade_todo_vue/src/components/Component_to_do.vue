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
                {texto: "Fazer café", finalizada:false}
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
</style>