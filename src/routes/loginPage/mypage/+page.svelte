<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>{data.user.id}</h1>
<h2>{data.user.email}</h2>
<a href="logout">Log Out</a>
