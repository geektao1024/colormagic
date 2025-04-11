import { useRuntimeConfig } from '#imports';

interface MongoConfig {
  url: string;
}

function getMongoConfig(): MongoConfig {
  const config = useRuntimeConfig();
  return {
    url: config.mongo.url
  };
}

const mongoConfig = getMongoConfig();

export default mongoConfig;
