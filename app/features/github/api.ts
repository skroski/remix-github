import invariant from "tiny-invariant";

export const getGithubUser = async (username?: string) => {

    invariant(username, "Por favor insira um usuario valido na url")

    const res = await fetch(`https://api.github.com/users/${username}`
    // ,{
    //     headers:{
    //         accept: "application/vnd.github.v3+json",
    //         Authorization: "token"
    //     }
    // }
    );

    const { login, avatar_url, html_url, bio } = await res.json();
  
    return { login, avatar_url, html_url, bio };
}