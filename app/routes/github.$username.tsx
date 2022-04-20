import { LoaderFunction, useLoaderData } from "remix";
import {GithubApi, GithubContainer, LoaderData } from "../features/github"



export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await GithubApi.getGitHubUser(params.username),
    repos: await GithubApi.getUserRepos(params.username)
  };
};
export function ErrorBoundary(){
    return <h3>Bomb</h3>
}
export default function () {
 const { user, repos } = useLoaderData<LoaderData>();
 return <GithubContainer repos={repos} user={user}/>
}
