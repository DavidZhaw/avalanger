<script>
    import { enhance } from '$app/forms';
    
    let { data } = $props();

    let avalanches = $derived(data.avalanches);
</script>

<h1>Register avalanche</h1>

<form method="POST" action="?/registerAvalanche" use:enhance>
    <div style="margin-bottom: 8px;">
        <label for="">Country</label>
        <input name="country" type="text">
    </div>
    <div style="margin-bottom: 8px;">
        <label for="">Description</label>
        <input name="description" type="text">
    </div>
    <button type="submit">
        Register
    </button>
</form>

<h1>Avalanches</h1>

<ul>
    {#each avalanches as avalanche}
        <li>[{avalanche.country}] {avalanche.description}</li>
    {/each}
</ul>
