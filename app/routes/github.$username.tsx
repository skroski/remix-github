import { LoaderFunction, useLoaderData } from "remix";
import { LoaderData } from "~/features/github/types";
import { styled } from '@stitches/react';


const Button = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });


export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.username}`);

  const {login, avatar_url, html_url, bio} = await res.json();

  return {
    user: {login, avatar_url, html_url, bio},
  };

//   return{
//     user: await getGitHubUser(params.username)
// }
};




export default function () {
  const { user } = useLoaderData<LoaderData>();
  return (
    <>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login} width="150" />
      <Button>Teste</Button>
    </>
  );
}
