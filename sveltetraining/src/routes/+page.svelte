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

{#each tenItems as i}
    <CountComponent bind:initCount={i} on:countChanged={countUpdated} />
{/each}


