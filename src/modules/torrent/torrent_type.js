import data from "../../../data.json";

const typeDefs = `
  extend type Query {
    allTorrents: [Torrent]
    torrent(title: String!): Torrent
  }

  type Torrent {
    title: String
    torrentUrl: String
    magnet: String
    url: String
    info: Info
    comments: [Comment]
    files: [File]
  }
`;

const resolvers = {
  Query: {
    allTorrents: () => {
      return data;
    },
    torrent: (root, { title }) => {
      return data.filter(torrent => {
        return torrent.title === title;
      })[0];
    }
  }
};

export { typeDefs, resolvers };
