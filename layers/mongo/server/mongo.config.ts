import { useRuntimeConfig } from '#imports';

function getMongoConfig() {
  const config = useRuntimeConfig();
  return {
    url: config.mongo.url
  };
}

export default getMongoConfig;
