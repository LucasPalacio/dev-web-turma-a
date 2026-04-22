<template>
  <div class="todo-container">
    <h2>Minha Lista de Tarefas</h2>

    <div class="input-group">
      <input 
        v-model="novaTarefa" 
        type="text" 
        placeholder="Digite uma tarefa..."
        @keyup.enter="adicionarTarefa"
      >
      <button @click="adicionarTarefa">Adicionar</button>
    </div>

    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">
        <span :class="{ concluida: tarefa.finalizada }">
          {{ tarefa.texto }}
        </span>
        
        <div class="acoes">
          <button @click="marcarConcluida(index)">
            {{ tarefa.finalizada ? 'Desfazer' : 'Concluir' }}
          </button>
          <button @click="removerTarefa(index)" class="btn-remover">Remover</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoComponent",
  data() {
    return {
      novaTarefa: "",
      // Lista inicial de objetos
      tarefas: [
        { texto: "Estudar Vue 3", finalizada: false },
        { texto: "Praticar v-for", finalizada: false }
      ]
    };
  },
  methods: {
  adicionarTarefa() {
  const textoLimpo = this.novaTarefa.trim(); // Armazena o valor tratado
  
  if (textoLimpo !== "") {
    this.tarefas.push({
      texto: textoLimpo,
      finalizada: false
    });
    this.novaTarefa = "";
  }
},
    marcarConcluida(index) {
      // Inverte o status de finalizada
      this.tarefas[index].finalizada = !this.tarefas[index].finalizada;
    },
   removerTarefa(index) {
  const tarefaSelecionada = this.tarefas[index];
  
  if (confirm(`Deseja excluir a tarefa: ${tarefaSelecionada.texto}?`)) {
    this.tarefas.splice(index, 1);
  }
}
  }
};
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.concluida {
  text-decoration: line-through;
  color: #888;
}

.acoes {
  display: flex;
  gap: 5px;
}

.btn-remover {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>