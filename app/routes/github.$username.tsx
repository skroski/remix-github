import { LoaderFunction, useLoaderData } from "remix";
import { LoaderData } from "~/features/github/types";
import { createStitches, styled } from '@stitches/react';

import { violet, slate, red, green, yellow, orange } from "@radix-ui/colors";


const { css } = createStitches({
    theme: {
      colors: {
        ...slate,
        ...violet,
        ...red,
        ...green,
        ...yellow,
        ...orange,
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
        5: "48px",
        6: "64px",
        7: "128px",
      },
      radii: {
        round: "9999px",
      },
      fontSizes: {
        1: "12px",
        2: "16px",
      },
    },
    utils: {
      paddingX: (value: any) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
    },
  });
  const Box = css( {
    backgroundColor: 'red'
  });
  
  const root = css({});
  
  const body = css({ padding: 40 });
  
  const button = css({
    appearance: "none",
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "$round",
    cursor: "pointer",
    paddingX: "$3",
    paddingTop: "$2",
    paddingBottom: "$2",
  
    variants: {
      size: {
        1: {
          height: "$4",
          fontSize: "$1",
        },
        2: {
          height: "$7",
          fontSize: "$2",
        },
      },
      variant: {
        gray: {
          backgroundColor: "$slate3",
          "&:hover": {
            backgroundColor: "$slate11",
            color: "$white",
          },
        },
        purple: {
          backgroundColor: "$violet3",
          "&:hover": {
            backgroundColor: "$violet11",
            color: "white",
          },
        },
        danger: {
          backgroundColor: '$red3',
          "&:hover": {
            backgroundColor: "$red11",
            color: 'white',
          },
        },
        success: {
          backgroundColor: '$green3',
          "&:hover": {
            backgroundColor: "$green11",
            color: "white",
          },
        },
        warning: {
          backgroundColor: '$yellow3',
          "&:hover": {
            backgroundColor: "$yellow11",
            color: "white",
          },
        },
      },
      outlined: {
        true: {
          border: "2px solid $violet7",
          backgroundColor: "$white",
          color: "$violet7",
        },
      },
    },
    compoundVariants: [
      {
        variant: "gray",
        outlined: true,
        css: {
          borderColor: "$slate7",
        },
      },
      {
        variant: "purple",
        outlined: true,
        css: {
          borderColor: "$violet7",
          color: "$violet7",
          "&:hover": {
            color: "white",
          },
        },
      },
      {
        variant: "danger",
        outlined: true,
        css: {
          borderColor: "$red7",
          color: "$red11",
          "&:hover": {
            color: "white",
          },
        },
      },
    ],
    defaultVariants: {
      variant: "gray",
    },
  });
  
  const box = css({});
  
  const overlay = css({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0, 0.2)",
  });
  
  const heading01 = css({
      color: "$green7",
    })
  
  const content = css({
    backgroundColor: "white",
    padding: "$4",
    width: 500,
    position: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(0%, -100%)",
  });

const Button = styled('button', {
    variants: {
        variant: {
          primary: {
            backgroundColor: '$green3',
            borderRadius: '9999px',
            fontSize: '13px',
            padding: '10px 15px',
            cursor:"pointer",
            '&:hover': {
              backgroundColor: '$green7',
            },
          },
          secondary: {
            backgroundColor: "$green7",
            borderRadius: '9999px',
            fontSize: '13px',
            padding: '10px 15px',
            cursor:"pointer",
            '&:hover': {
              backgroundColor: "$green10",
              color: 'white'
            },
          },
        },
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
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
        <hr/>
      <button className={button()}>Botão Gray</button>
        <button className={button({ variant: "purple" })}>Botão Purple</button>
        <button className={button({ outlined: true })}>Botão OutLined</button>
        <button className={button({ variant: "purple", outlined: true })}>
          Botão Purple e Outlined
        </button>
        <button className={button({ variant: "danger"})}>
          Botão Danger
        </button>
        <button className={button({ variant: "danger", outlined: true })}>
          Botão Danger
        </button>
        <button className={button({ variant: "success", outlined: false })}>
          Botão Success
        </button>
        <button className={button({ variant: "warning", outlined: false })}>
          Botão Warning
        </button>
     
        <h2>Botão Responsivo</h2>

        <hr />
        <button
          className={button({
            size: {
              "@initial": "1",
              "@media (min-width: 500px)": "2",
            },
          })}
        >
          Botão Responsivo
        </button>
    </>
  );
}
