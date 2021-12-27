<script>
    import { createEventDispatcher } from 'svelte'

    let email
    let password
    let username
    let error


    const dispatch = createEventDispatcher();

    async function register() {
        error = '';
        try {
                const res = await fetch('/auth/register', {
                    method: 'POST',
                    body:JSON.stringify( {
                        email,
                        password,
                        username
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
        <h1 class="text">Sign Up</h1>

        <div class="login p-4 my-5">
                <div class="login-form">
                    <form action="">

                        <div class="mb-3"> 
                            <input type="username" bind:value={ username } placeholder="Your Username" class="form-control" />
                        </div>
                       
                        <div class="mb-3"> 
                            <input type="email" bind:value={ email } placeholder="Your E-mail Address" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <input type="password" bind:value={ password } placeholder="Enter a password" class="form-control" />
                        </div>
                        
                        <div class="mb-3">
                            <input type="password" bind:value={ password } placeholder="Confirm your password" class="form-control" />
                        </div>
                        
                        
                            <button type="submit" on:click={ register } class="btn btn-success">Ok!</button>
                    </form>
                </div>
        </div>
    </div>
</main>