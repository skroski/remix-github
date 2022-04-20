import { createStitches, styled } from "@stitches/react";
import { violet, slate, red, green, yellow, orange } from "@radix-ui/colors";
import { User, Repositories } from "../types";
import { Outlet } from "remix";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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
const StyledItem = styled(DropdownMenu.Item, {
  '&[data-disabled]': { color: 'violet' },
});

const Box = styled("div", {
  backgroundColor: "red",
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
        backgroundColor: "$red3",
        "&:hover": {
          backgroundColor: "$red11",
          color: "white",
        },
      },
      success: {
        backgroundColor: "$green3",
        "&:hover": {
          backgroundColor: "$green11",
          color: "white",
          textAlign: "center",
        },
      },
      warning: {
        backgroundColor: "$yellow3",
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

const overlay = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0, 0.2)",
});

const heading01 = css({
  color: "$green7",
});

const content = css({
  backgroundColor: "white",
  padding: "$4",
  width: 500,
  position: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translate(0%, -100%)",
});

const Button = styled("button", {
  variants: {
    variant: {
      primary: {
        backgroundColor: "$green3",
        borderRadius: "9999px",
        fontSize: "13px",
        padding: "10px 15px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$green7",
        },
      },
      secondary: {
        backgroundColor: "$green7",
        borderRadius: "9999px",
        fontSize: "13px",
        padding: "10px 15px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$green10",
          color: "white",
        },
      },
    },
  },
});

export interface GithubContainerProps {
  user: User;
  repos: Repositories.Repo[];
}
export function GithubContainer({ user, repos }: GithubContainerProps) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      />
      <div className="relative min-h-full flex flex-col">
        {/* Navbar */}
        <nav className="flex-shrink-0 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo section */}
              <div className="flex items-center px-2 lg:px-0 xl:w-64">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt="Workflow"
                  />
                </div>
              </div>

              {/* Search section */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-full px-2 lg:px-6">Duplo D Design e Desenvolvimento</div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              {/* Links section */}
              <div className="hidden lg:block lg:w-80">
                <div className="flex items-center justify-end">
                  <div className="flex">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">
                      Testt 4
                    </a>
                  </div>
                  {/* Profile dropdown */}
                  <div className="ml-4 relative flex-shrink-0">
                    <div>
                      <button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.avatar_url}
                          alt={user.login}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            z
          </div>
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a>Teste 2</a>
            </div>
            <div className="pt-4 pb-3 border-t border-indigo-800">
              <div className="px-2 space-y-1">
                <a className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">
                  Teste
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={user.avatar_url}
                            alt={user.login}
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900">
                            {user.login}
                          </div>
                          <a
                            href="#"
                            className="group flex items-center space-x-2.5"
                          >
                            <svg
                              className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
                              github/{user.login}
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row xl:flex-col">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                        >
                          New Project
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                        >
                          Invite Team
                        </button>
                      </div>
                    </div>
                    {/* Meta info */}
                    <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 font-medium">
                          Pro Member
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div>
                          className="h-5 w-5 text-gray-400" aria-hidden="true"
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          <h1 className={heading01()}>{user.login}</h1>
                          <blockquote>{user.bio}</blockquote>
                          <img
                            src={user.avatar_url}
                            alt={user.login}
                            width="150"
                          />
                          <hr />
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger className={button({ variant: "purple" })}>Item Principal</DropdownMenu.Trigger>
                            <DropdownMenu.Content className={button({ variant: "purple" })}>
                              <DropdownMenu.Item>Item 1 Menu</DropdownMenu.Item>
                              <DropdownMenu.Item>Item 2 Menu</DropdownMenu.Item>
                              <DropdownMenu.Separator />
                              <DropdownMenu.Root>
                                <DropdownMenu.TriggerItem>
                                  Sub menu →
                                </DropdownMenu.TriggerItem>
                                <DropdownMenu.Content>
                                  <DropdownMenu.Item>
                                    Sub menu item
                                  </DropdownMenu.Item>
                                  <DropdownMenu.Item>
                                    Sub menu item
                                  </DropdownMenu.Item>
                                  <DropdownMenu.Arrow />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                              <DropdownMenu.Separator />
                              <DropdownMenu.Item>Primeiro Item de Menu</DropdownMenu.Item>
                            </DropdownMenu.Content>
                          </DropdownMenu.Root>
                          <Outlet />
                          <Box>Teste Vermelho</Box>
                          <Button variant="primary">Primary Button</Button>
                          <Button variant="secondary">Secondary Button</Button>
                          <hr />
                          <button className={button()}>Botão Gray</button>
                          <button className={button({ variant: "purple" })}>
                            Botão Purple
                          </button>
                          <button className={button({ outlined: true })}>
                            Botão OutLined
                          </button>
                          <button
                            className={button({
                              variant: "purple",
                              outlined: true,
                            })}
                          >
                            Botão Purple e Outlined
                          </button>
                          <button className={button({ variant: "danger" })}>
                            Botão Danger
                          </button>
                          <button
                            className={button({
                              variant: "danger",
                              outlined: true,
                            })}
                          >
                            Botão Danger
                          </button>
                          <button
                            className={button({
                              variant: "success",
                              outlined: false,
                            })}
                          >
                            Botão Success
                          </button>
                          <button
                            className={button({
                              variant: "warning",
                              outlined: false,
                            })}
                          >
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
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"></div>
        </div>
      </div>
    </>
  );
}
