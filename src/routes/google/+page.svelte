<nav>
	<span>
		<a class="header-link" href="/">Google 정보</a>
		<a class="header-link" href="/">스토어</a>
	</span>
	<span>
		<a class="header-link" href="/">Gmail</a>
		<a class="header-link" href="/">이미지</a>
	</span>
</nav>
<main>
	<img src="/google-logo.png" alt="logo" />
	<input type="text" />
	<span class="button-container">
		<button>Google 검색</button>
		<button>I'm Feeling Lucky</button>
	</span>
</main>
<footer>
	<div>
		<span class="country">대한민국</span>
	</div>
	<hr />
	<div>
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
	nav {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 20px;
		box-sizing: border-box;
	}

	nav > span {
		display: flex;
		align-items: center;
		column-gap: 10px;
	}

	.header-link {
		color: #333333;
		text-decoration: none;
		font-size: small;
	}

	.header-link:hover {
		text-decoration: underline;
	}

	img {
		width: 272px;
		height: 92px;
	}

	input {
		width: 500px;
		height: 30px;
		padding: 10px;
		border: 1px solid #dfe1e5;
		border-radius: 999px;
		box-shadow: none;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 12px;
		height: 100vh;
	}

	.button-container {
		display: flex;
		column-gap: 10px;
	}

	button {
		padding: 10px;
		border: none;
		border-radius: 8px;
		box-shadow: none;
		cursor: pointer;
	}

	footer {
		background-color: #f2f2f2;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	footer > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	a {
		font-size: small;
	}

	footer span {
		display: flex;
		column-gap: 10px;
	}

	footer span > a {
		color: #70757a;
		text-decoration: none;
	}

	footer span > a:hover {
		text-decoration: underline;
	}
	.country {
		font-size: small;
		color: #70757a;
	}
</style>
