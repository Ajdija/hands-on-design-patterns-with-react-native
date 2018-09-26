import { Platform } from 'react-native';

const apiFetch = (path: string) => ((Platform.OS === 'ios')
    ? fetch(`http://localhost:3000/${path}`)
    : fetch(`http://10.0.2.2:3000/${path}`))
    .then(response => ({ response }))
    .catch(error => ({ error }));

export default apiFetch;
