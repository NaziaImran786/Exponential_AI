import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blogs'
import { comment } from './comment'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, comment, user],
}
