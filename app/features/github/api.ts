import invariant from "tiny-invariant";
import { Repositories } from "./types"

export const getGitHubUser = async (username?: string) => {

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

export const getUserRepos = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`
  );


  return (await res.json()).map(
    ({ id, full_name,stargazers_count, html_url, language, name }: Repositories.Repo) => {
          return ({
              id,
              full_name,
              stargazers_count,
              html_url,
              language,
              name
          });
      }
  ); 
};
export const getCommits = async (
  reponame?: string,
  username?: string
): Promise<Types.Commits.Commit[]> => {
  invariant(reponame, "Please provide an repository name as a string");
  invariant(username, "Please provide an user name as a string");

  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`
  );

  return (await res.json()).map((commit: Types.Commits.ApiResponse) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url,
  }));
};