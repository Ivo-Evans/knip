export default {
  ignore: '.astro/types.d.ts',
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
  "storybook": {
    "config": [
      ".{storybook,rnstorybook}/{main,test-runner}.{js,ts,mts}"
    ],
    "entry": [
      ".{storybook,rnstorybook}/{manager,preview,index,vitest.setup}.{js,jsx,ts,tsx}",
      "**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))"
    ],
    "project": [
      ".{storybook,rnstorybook}/**/*.{js,jsx,ts,tsx,mts}"
    ]
  }
};
