import { send } from '../deps.js';

const errorMiddleware = async(context, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
  }
}

var requestCount = 0;
const requestLoggingMiddleware = async({ request, session, response }, next) => {
  const start = Date.now();
  requestCount += 1
  const requestNumber = requestCount
  console.log(`#${requestNumber} Started ${request.method} "${request.url.pathname}" for ${ request.ip } at ${new Date().toISOString()}`)
  await next();
  const ms = Date.now() - start;
  console.log(`#${requestNumber} Completed ${request.method} "${request.url.pathname}" with ${ response.status } in ${ms}ms`);
}

const serveStaticFilesMiddleware = async(context, next) => {
  if (context.request.url.pathname.startsWith('/static')) {
    const path = context.request.url.pathname.substring(7);
  
    await send(context, path, {
      root: `${Deno.cwd()}/static`,
      maxage: 86400000
    });
  
  } else {
    await next();
  }
}

export { errorMiddleware, requestLoggingMiddleware, serveStaticFilesMiddleware }
