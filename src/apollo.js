import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://movieql2.vercel.app/',
    cache: new InMemoryCache(),
    resolvers: {
      Movie: {
        isLiked: () => false,
      },
      Mutation: {
        toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
          cache.modify({
            id: `Movie:${id}`,
            fields: {
              isLiked: () => !isLiked,
            },
          });
        },
      },
    },
  });

export default client;

