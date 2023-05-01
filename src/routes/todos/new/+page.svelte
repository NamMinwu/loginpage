<script lang="ts">
	import axios from 'axios';
	import type { Todo } from '@prisma/client';
	import { goto } from '$app/navigation';

	let title = '';
	let content = '';
	// export let data: PageServerData;
	// let todos: Todo[] = [...data.todos];

	async function addTodo() {
		const response = await axios.post('/api/todos', {
			title,
			content
		});
		console.log(response.data);
		title = '';
		content = '';
		goto('/');
		// todos = [...todos, response.data];
	}
</script>

<div class="write">
	<input bind:value={title} placeholder="title" name="title" />
	<textarea bind:value={content} placeholder="content" />
	<button on:click={addTodo}>add</button>
</div>

<style>
	.write {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.write > input {
		width: 360px;
		margin-bottom: 50px;
		font-size: 15px;
		font-family: sans-serif;
		border-radius: 20px;
		padding: 20px;
	}
	.write > textarea {
		width: 300px;
		margin-bottom: 50px;
		font-size: 15px;
		font-family: sans-serif;
		border-radius: 20px;
		padding: 50px;
		height: 300px;
		resize: none;
	}
	.write > button {
		width: 300px;
		border-radius: 20px;
		padding: 20px;
	}
</style>
