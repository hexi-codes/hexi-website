const eslintConfig = [
  {
    ignores: ['node_modules/**', 'dist/**', '.astro/**', 'build/**', 'examples/**', 'skills'],
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
]

export default eslintConfig
