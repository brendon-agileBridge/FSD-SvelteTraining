<script>
    import {createEventDispatcher, onMount} from "svelte";

    export let initCount = 0;

    const dispatch = createEventDispatcher();

    let count = 0;

    onMount(() => {
        count = initCount;
    });

    $: dispatch('countChanged', count);

    function reset() {
        count = 0;
    }
</script>

<br>
<label>Count is: {count}</label>
<br>
<input type="number" bind:value={count}/>
<br>
<button on:click={() => reset()}>Reset</button>
<br>