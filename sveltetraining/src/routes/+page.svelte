<script>
    import CountComponent from "../components/countComponent.svelte";
    import {onDestroy} from "svelte";
    import {pageAlreadyRendered} from "../store/totals.js";

    let tenItems = [1,2,3,4,5,6,7,8,9,10];

    /**
     * @param {CustomEvent} val
     */
    function countUpdated(val){
        console.log(val.detail);
    }
    
    onDestroy(() => {
        pageAlreadyRendered.set(true);
    });

</script>

{#each tenItems as i}
    <CountComponent bind:initCount={i} on:countChanged={countUpdated} />
{/each}


