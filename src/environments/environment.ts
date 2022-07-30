// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false
};

//criando varuavel constante (seu valor não se altera) e que vai ser de variavel de ambiente para guardar o endpoint da api mockada
export const endpoint_api_mock = "http://localhost:3000"