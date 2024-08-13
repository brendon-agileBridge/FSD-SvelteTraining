<script>
    import CountComponent from "../components/countComponent.svelte";

    let tenItems = [1,2,3,4,5,6,7,8,9,10];

    /**
     * @param {CustomEvent} val
     */
    function countUpdated(val){
        alert(val.detail);
    }

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each tenItems as i}
    <CountComponent bind:initCount={i} on:countChanged={countUpdated} />
{/each}


