<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="main">
	<a href="/new">Write Todo</a>
	<ul>
		{#each data.todos as todo}
			<li><a href="/{todo.id}">{todo.title}</a></li>
		{/each}
	</ul>
</div>

<style>
	.main {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}
</style>
