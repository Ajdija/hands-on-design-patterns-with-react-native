const apiFetch = path => fetch(`http://localhost:3000/${path}`)
    .then(response => ({ response }))
    .catch(error => ({ error }));

export default apiFetch;
