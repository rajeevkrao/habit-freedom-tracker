<script lang="ts">
	import { habits } from '$lib/habits';
</script>

<main>
	<h1>Habit Freedom Tracker</h1>
	<p class="intro">Choose a habit you want to work on:</p>

	<div class="card-grid">
		{#each habits as habit}
			<a href="/habit/{habit.slug}" class="card">
				<h3>{habit.name}</h3>
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 800px;
		margin: 2rem auto;
		padding: 1rem;
		text-align: center;
	}

	h1 {
		color: #333;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.intro {
		color: #666;
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.card {
		display: block;
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		text-decoration: none;
		color: #333;
		background-color: #f9f9f9;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.card h3 {
		margin: 0;
		font-size: 1.5rem;
	}
</style>
