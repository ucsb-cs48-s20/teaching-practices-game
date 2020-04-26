This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Commands

These likely will not work until initial configuration is done per instructions below.

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm install`          | Install Dependencies                         |
| `npm run dev`          | Runs locally                                 |
| `npm run test`         | Runs entire test suite                       |
| `npm run test:cypress` | Runs Cypress integration tests               |
| `npm run test:cypress` | Runs `prettier` format tests                 |
| `npm run fix:format`   | Reformats all project files using `prettier` |

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
