import merge from 'lodash.merge'
import {
  typeDefs as Torrent,
  resolvers as TorrentResolvers
} from '../modules/torrent/torrent_type'
import { typeDefs as Info } from '../modules/info/info_type'
import { typeDefs as Comment } from '../modules/comment/comment_type'
import { typeDefs as File } from '../modules/file/file_type'

const typeDefs = `
  type Query {
    _: String
  }

  ${Torrent}

  ${Comment}

  ${Info}

  ${File}
`

const resolvers = merge(TorrentResolvers)

export { typeDefs, resolvers }
