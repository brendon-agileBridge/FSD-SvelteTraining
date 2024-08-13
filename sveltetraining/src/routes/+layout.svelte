<script>
    import {onMount} from "svelte";
    import {page} from "$app/stores";

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

<nav>
<a href="/" class:active={$page.url.pathname === ('/')}>Home</a>
<a href="/totals" class:active={$page.url.pathname === ('/totals')}>Totals</a>
</nav>
<slot></slot>

<style >
    nav {
        padding: 0.3rem;
    }

    a {
      text-decoration: none;
    }

    a.active {
      background-color: #ad4949;
      color: white;
      border-radius: 25px;
      padding: 0.3rem;
    }
</style>