import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Tasks: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
