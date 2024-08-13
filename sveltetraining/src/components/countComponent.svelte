<script>
    import {createEventDispatcher, onMount} from "svelte";
    import {goto} from "$app/navigation";

    export let initCount = 0;

    const dispatch = createEventDispatcher();

    /**
     * @type {number|undefined}
     */
    let count = undefined;

    onMount(() => {
        count = initCount;
    });

    $: {
        if(count !== undefined && count !== initCount) {
            dispatch('countChanged', count);
            goto('/totals');
        }
    }

    function reset() {
        count = 0;
    }

    $: letter = function(){
        let ordA = 'a'.charCodeAt(0);
        let ordZ = 'z'.charCodeAt(0);
        let len = ordZ - ordA + 1;

        let s = "";
        let n = count;
        while(n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    };
</script>

<br>
<label>Count is: {count}</label>
<br>
<label>letter is: {letter()}</label>
<br>
<input type="number" bind:value={count}/>
<br>
<button on:click={() => reset()}>Reset</button>
<br>