<script>
    import Login from "$lib/Login.svelte";
    import Register from "$lib/Register.svelte";

    import { goto } from '$app/navigation';

    const redirectToProfile = () => {
        goto ('/profile');
    }

    
</script>


<div class="card">
    <div class="card-header">
        <h2 class="card-title">Cookie Based Authentication</h2>
    </div>
    <div class="card-body">
        <Login on:success={redirectToProfile } />
        <Register on:success={ redirectToProfile } />
    </div>
</div>