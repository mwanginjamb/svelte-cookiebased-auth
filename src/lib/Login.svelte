<script>
    import { createEventDispatcher } from 'svelte'

    let email
    let password
    let error


    const dispatch = createEventDispatcher();

    async function login() {
        error = '';
        try {
                const res = await fetch('/auth/login', {
                    method: 'POST',
                    body:JSON.stringify( {
                        email,
                        password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if(res.ok) {
                    dispatch('success');
                } else {
                    error = 'An error occurred';
                }
        }
        catch(error) {
            console.error(error);
            alert(error.error.message);
        }
    }
</script>

<main>
    <div class="container">
        <h1 class="text">Login</h1>

        <div class="login p-4 my-5">
                <div class="login-form">
                    <form>
                       
                        <div class="mb-3">
                            
                            <input type="email" bind:value={ email } placeholder="Your E-mail Address" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <input type="password" bind:value={ password } class="form-control" />

                        </div>
                        
                        
                            <button type="submit" on:click={ login } class="btn btn-success">Ok!</button>
                    </form>
                </div>
        </div>
    </div>
</main> 