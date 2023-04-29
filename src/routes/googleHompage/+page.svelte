<script lang="ts">
	let input = '';
</script>

<nav>
	<div class="Header">
		<div class="leftSide">
			<a class="header-link" href="/">Google Inf</a>
			<a class="header-link" href="/">Store</a>
		</div>

		<div class="rightSide">
			<a class="header-link" href="/">Gmail</a>
			<a class="header-link" href="/">Image</a>
			<a class="header-link" href="/">Icon</a>
			<a class="header-link" href="/">Icon</a>
		</div>
	</div>
</nav>

<div class="Body">
	<img src="./google_logo.png" alt="logo" />
	<input bind:value={input} />
	<div class="button-container">
		<button>Google S</button>
		<button>I'm Feeling Lucky</button>
	</div>
</div>

<footer>
	<div class="korea">korea</div>
	<div class="a">
		<span>
			<a href="/">광고</a>
			<a href="/">비즈니스</a>
			<a href="/">검색의 원리</a>
		</span>
		<span>
			<a href="/">개인정보처리방침</a>
			<a href="/">약관</a>
			<a href="/">설정</a>
		</span>
	</div>
</footer>

<style>
	.Header {
		display: flex;
		position: fixed;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		left: 0;
	}
	.Body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		row-gap: 12px;
	}
	.header-link {
		font-size: 14px;
		font-family: sans-serif;
		color: #202124;
		text-decoration: none;
	}
	.header-link:hover {
		text-decoration: underline;
	}
	button {
		padding: 10px;
		border-radius: 4px;
		font-size: 14px;
		font-family: sans-serif;
		color: #202124;
		background-color: #f8f9fa;
		border: 1px solid #dadce0;
	}
	.button-container {
		display: flex;
		column-gap: 10px;
	}
	input {
		width: 582px;
		height: 46px;
		border-radius: 999px;
		border: 1px solid #dfe1e5;
	}
	footer {
		background-color: #f2f2f2;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		position: fixed;
	}
	footer > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	footer span > a {
		color: #70757a;
		text-decoration: none;
		font-size: small;
		font-family: sans-serif;
	}

	footer span > a:hover {
		text-decoration: underline;
	}
</style>
