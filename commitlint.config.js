module.exports = {
  extends: [
      "@commitlint/config-conventional"
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "button"]
    ],
    "subject-case": [
      2,
      "always",
      [
        "lower-case",
        "upper-case",
        "camel-case",
        "kebab-case",
        "pascal-case",
        "sentence-case",
        "snake-case",
        "start-case"
      ],
    ],
  }
};
