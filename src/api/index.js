export const fetchDoggos = async () => {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const data = await res.json();
    console.log('data',data[0])

    if(data.status >= 400) {
        throw new Error(data.message);
    }
    return data[0];
}
