<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let answers = $state({});

	function handleSubmit(event: Event) {
		event.preventDefault();
		console.log('Form Submitted:', {
			habit: data.habit.name,
			answers: answers
		});
		alert('Check the console for the form data.');
	}
</script>

<main>
	<a href="/" class="back-link">← Back to Habits</a>
	<h1>{data.habit.name}</h1>

	<form onsubmit={handleSubmit}>
		{#each data.habit.questions as question, i}
			{@const showQuestion = !question.dependsOn || answers[question.dependsOn] === question.dependsOnValue}
			{#if showQuestion}
				<div class="form-group">
					<label for="question-{i}">{question.text}</label>
					{#if question.type === 'select'}
						<select id="question-{i}" bind:value={answers[i]}>
							<option value="" disabled selected>Select an option</option>
							{#each question.options as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
					{:else if question.type === 'number'}
						<input type="number" id="question-{i}" bind:value={answers[i]} />
					{:else if question.type === 'radio'}
						<div class="radio-group">
							{#each question.options as option}
								<label>
									<input type="radio" name="question-{i}" value={option} bind:group={answers[i]} />
									{option}
								</label>
							{/each}
						</div>
					{:else if question.type === 'textarea'}
						<textarea id="question-{i}" bind:value={answers[i]}></textarea>
					{:else if question.type === 'range'}
						<div class="range-group">
							<input type="range" id="question-{i}" min={question.min} max={question.max} bind:value={answers[i]} />
							<span>{answers[i] || question.min}</span>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
		<button type="submit">Submit</button>
	</form>
</main>

<style>
	main {
		font-family: sans-serif;
		max-width: 600px;
		margin: 2rem auto;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		background-color: #f9f9f9;
	}

	h1, h2 {
		text-align: center;
		color: #333;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		color: #555;
	}

	input[type='number'],
	select,
	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	.radio-group label {
		display: inline-block;
		margin-right: 1rem;
		font-weight: normal;
	}

	.range-group {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	button {
		display: block;
		width: 100%;
		padding: 0.75rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #0056b3;
	}

	.back-link {
		display: block;
		margin-bottom: 1rem;
		color: #007bff;
		text-decoration: none;
	}
</style>
