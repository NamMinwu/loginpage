<script lang = "ts">
	import TodoCard from "../../lib/components/TodoCard.svelte";

    let firstname = '';
    let lastname = '';
    $: name = firstname + ' ' + lastname;
    let todos = ['coding', 'lunch'];

    let newTodo = '';
    function addTodo(){
        todos = [...todos , newTodo];
        newTodo = '';
    }
</script>



<h1>{name}</h1>
<input bind:value={firstname}> 
<input bind:value={lastname}>

<h1>Todos</h1>

<input bind:value={newTodo} />
<button on:click={addTodo}>add</button>
{#each todos as todo}
    <TodoCard title={todo}/>
{/each}