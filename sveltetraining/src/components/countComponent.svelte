<script>
    import {createEventDispatcher, onMount} from "svelte";

    export let initCount = 0;

    const dispatch = createEventDispatcher();

    let count = 0;

    onMount(() => {
        count = initCount;
    });
</script>

<br>
<label>Count is: {count}</label>
<br>
<input type="number" bind:value={count} on:change={(event) => dispatch('countChanged',count)}/>
<br>
<button on:click={() => {count = 0}}>Reset</button>
<br>