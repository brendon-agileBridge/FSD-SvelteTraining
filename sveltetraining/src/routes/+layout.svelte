<script>
    import {onMount} from "svelte";

    /**
     * @type {string|undefined}
     */
    let currentPath;
    onMount(() => {
        currentPath = window.location.pathname;
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/" class:active={currentPath == '/'}>Home</a>
<a href="/totals" class:active={currentPath == '/totals'}>Totals</a>

<slot></slot>

<style>
    a{
        text-decoration: none;
    }
    
    a.active {
        background-color: #ad4949;
        color:white;
        border-radius:25px;
        padding:0.3rem;
    }
</style>