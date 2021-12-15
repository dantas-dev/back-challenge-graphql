import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('graphql', () => ({
  debug: process.env.GRAPHQL_DEBUG,
  playground: process.env.GRAPHQL_PLAYGROUND,
  sortSchema: process.env.GRAPHQL_SORTSCHEMA,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
}));
