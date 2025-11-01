Use nginx config to avoid cors block! don't hardcode base api url using axios, just use nginx
sicne nginx will make do is pretend that client and server are on the same domain and port so that the cors security won't be triggerd 
