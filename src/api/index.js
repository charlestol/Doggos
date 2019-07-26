export const fetchDoggos = async () => {
    const res = await fetch('https://dog.ceo/api/breed/shiba/images/random');
    const data = await res.json();
    console.log('res',res)
    if(data.status > 400) {
        throw new Error(data.message);
    }
    return data;
}
