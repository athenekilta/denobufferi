let config = {};

if (Deno.env.get('TEST_ENVIRONMENT')) {
  config.database = "test.db";
} else {
  config.database = "production.db";
}

config.port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  config.port = Number(lastArgument);
}

export { config }; 
