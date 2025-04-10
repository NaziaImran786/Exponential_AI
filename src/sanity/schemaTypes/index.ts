import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blogs'
import { comment } from './comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, comment, ],
}
