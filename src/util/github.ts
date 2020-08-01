
declare const process: { env: { BASIC_AUTH_TOKEN: string } }

export const serchRepositories: () => Promise<Array<RepositoryInfo>> = async () => {

    const params = {
        q: 'vue+in:readme,description+topic:javascript&sort=stars'
    }

    const qs = new URLSearchParams(params);

    const headers = new Headers();
    headers.append('Authorization', ` Basic ${process.env.BASIC_AUTH_TOKEN}`)
    headers.append('Accept', 'application/json, application/vnd.github.mercy-preview+json')


    const init = {
        method: 'GET',
        headers,
        mode: 'cors' as RequestMode,
    };
    const res = await fetch(`https://api.github.com/search/repositories?${qs}`, init)

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