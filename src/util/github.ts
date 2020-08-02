
declare const process: { env: { BASIC_AUTH_TOKEN: string } }

export const serchRepositories: (word: string, topic: string) => Promise<Array<RepositoryInfo>> = async (word, topic) => {

    const wordQuery = word ? `${word}+in:readme,description` : ''
    const topicQuery = topic ? `topic:${topic}` : ''

    const q = wordQuery + (wordQuery ? `+${topicQuery}` : topicQuery)

    console.log(q);

    if (!q) {
        return Promise.resolve([])
    }

    const headers = new Headers();
    headers.append('Authorization', ` Basic ${process.env.BASIC_AUTH_TOKEN} `)
    headers.append('Accept', 'application/json, application/vnd.github.mercy-preview+json')


    const init = {
        method: 'GET',
        headers,
        mode: 'cors' as RequestMode,
    };
    const res = await fetch(`https://api.github.com/search/repositories?q=${q}&sort=stars`, init)

    const json = await res.json()
    console.log(json);
    return json.items
}

export type RepositoryInfo = {
    full_name: string;
    description: string;
    stargazers_count: number;
    language: string;
    url: string;
    clone_url: string;
}