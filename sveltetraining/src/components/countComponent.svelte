<script>
    import {createEventDispatcher} from "svelte";
    import {incrementBy, pageAlreadyRendered, total} from "../store/totals.js";
    import { withPrevious } from 'svelte-previous';

    export let initCount = 0;

    const dispatch = createEventDispatcher();
    
    const [count, prevCount] = withPrevious(initCount);
    

  
    count.subscribe(value => {
        if(!$pageAlreadyRendered || $prevCount !== null){ 
            dispatch("countChanged", value - ($prevCount ?? 0));
            incrementBy(value - ($prevCount ?? 0));
        }
    });

    function reset() {
        count.set(0);
    }

    $: letter = function(){
        let ordA = 'a'.charCodeAt(0);
        let ordZ = 'z'.charCodeAt(0);
        let len = ordZ - ordA + 1;

        let s = "";
        let n = $count;
        while(n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    };
</script>

<br>
<label>Count is: {$count}</label>
<br>
<label>letter is: {letter()}</label>
<br>
<input type="number" bind:value={$count}/>
<br>
<button on:click={() => reset()}>Reset</button>
<br>
{$total}
<br>