export const serchRepositories: () => Promise<Array<RepositoryInfo>> = async () => {

    const params = {
        q: 'vue+in:readme,description+topic:javascript&sort=stars'
    }

    const qs = new URLSearchParams(params);

    const headers = new Headers();
    headers.append('Authorization', ' Basic eXNrc3Q5Njo2YTgzMjVhOTE2ZDRiYmJjOTE0ZjdhNDQ1NjJlMGE4MDBmYmRjMGU4')
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