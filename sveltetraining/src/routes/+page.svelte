<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<label>Count is: {count}</label>
<br>
Alternatively Count is: 
<span contenteditable="false" bind:textContent={count}></span>

<script>
    let count = 0;
</script>