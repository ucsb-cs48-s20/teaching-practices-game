Teaching Practices Game: A website implementation of the [Teaching Practices Game](https://www.csteachingtips.org/cards).

# Commands

These likely will not work until initial configuration is done per instructions below.

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm install`          | Install Dependencies                              |
| `npm run dev`          | Runs locally in development mode                  |
| `npm run start`        | Runs in production mode (requires `PORT` env var) |
| `npm run test`         | Runs entire test suite                            |
| `npm run test:cypress` | Runs Cypress integration tests                    |
| `npm run test:cypress` | Runs `prettier` format tests                      |
| `npm run fix:format`   | Reformats all project files using `prettier`      |

Note that while no environment variables are required to run
`npm run dev`, running `npm run start` requires that the `PORT` environment
variable be set first, e.g.

```
export PORT=3000
```


# React Storybook

A storybook for the React components of this project is published here on GitHub pages

- <https://ucsb-cs48-s20.github.io/teaching-practices-game-storybook>

# How to update the Storybook on GitHub pages

First, you must understand that there are two repos for this project:

| Purpose          | Repo                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Source Code      | [teaching-practices-game](https://github.com/ucsb-cs48-s20/teaching-practices-game)                     |
| Static Storybook | [teaching-practices-game-storybook](https://github.com/ucsb-cs48-s20/teaching-practices-game-storybook) |

The Static Storybook repo exists only for the purpose of publishing the storybook, and
should be updated only using this process:

First, inside `teaching-practices-game`, use `npm run storybook` and then
visit the storybook on <http://localhost:6006> to ensure that the storybook is building properly.

Then, when you are ready to update the static storybook published to GitHub pages:

- Clone both repos as siblings under the same parent directory
- Inside `teaching-practices-game`, run the command:

  ```
  npm run build-storybook
  ```

  This will wipe out the directory `../teaching-practices-game-storybook/docs` in the other repo, and populate
  it with new content based on the current source code.

# Why not just host the storybook inside the `docs` directory of the main repo?

The storybook could be hosted inside the `docs` directory of the main repo; you might think this would
simplify things.

The problem is that this can makes reviewing pull requests quite complicated, since a small change to
a "story" or a dependency could cascade into many "apparent changes" to the generated HTML/CSS/JS files under
the `docs` subdirectory. This clutter could interfere with the ability of the team to review changes
and identify potential issues/problems/bugs.

(If there is a way to configure GitHub to ignore the contents of the `docs` directory when presenting
PR diffs, that could be another way to address this.)

# Initial Configuration

Run `npm install`

- on first clone of repo
- any time `package.json` is modified

# Performing a clean build

To peform a clean build, you can remove files that are created by `npm install`
and other actions:

```
rm -rf package-lock.json node_modules .next
```

And then repeat the `npm install` command.
