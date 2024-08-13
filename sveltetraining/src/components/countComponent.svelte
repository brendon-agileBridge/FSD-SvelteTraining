<label>Count is: {count}</label>
<br>
<input type="number" bind:value={count}/>
<button on:click={() => {count = 0}}>Reset</button>

<script>
    let count = 0;
</script>