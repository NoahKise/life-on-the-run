export async function getQuote() {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}