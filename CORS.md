Use nginx config to avoid cors block! don't hardcode base api url using axios, just use nginx
sicne nginx will make do is pretend that client and server are on the same domain and port so that the cors security won't be triggerd ,,
but if you are using vite u just put that in vite config no need for nginx since vite can act as a mini nginx
