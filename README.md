# Lampart Nextjs

Lampart project with Nextjs framework

## System Requirements :computer:

- Node.js 14.0 or later
- MacOS, Windows (including WSL), and Linux are supported

## Installation of nodejs

[nodejs](https://nodejs.org) Run the installer to download and install

## Installation of yarn

Open CLI and run

```bash
$ sudo npm install -g yarn
```

## Init development environment

In cli run

```bash
yarn
```

## Development build :eight_pointed_black_star:

```bash
yarn start
```

→ Open browser and check on `localhost:3000`

## Build Static Files :file_folder:

```sh
yarn build:release
```

Static files are served in `build` folder

## Storybook :notebook:

- Run and check on `localhost:6006`

  ```sh
  npm run storybook
  # OR
  yarn storybook
  ```

## Hygen :diamond_shape_with_a_dot_inside:

- Create a new component:

  ```sh
  npm run gen:component
  # OR
  yarn gen:component
  ```

- Choose your level Atomic and input your name.
