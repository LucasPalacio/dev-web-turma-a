

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