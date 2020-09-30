import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Toggle,
  Text,
  OverflowMenu,
  MenuItem,
} from '@ui-kitten/components';

import useTheme from '../hooks/useTheme';

const HeaderNavigator = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState(false);
  const [lang, setLang] = useState(false);

  const [theme, toggleTheme] = useTheme();

  const AvatarMenu = () => (
    <TouchableOpacity onPress={setShowMenu}>
      <Avatar size="large" source="https://picsum.photos/id/237/200/300" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text status="control" category="h5">
            Hello Mauro!
          </Text>
          <Text status="control" category="s1">
            Today you have 9 tasks
          </Text>
        </View>
        <OverflowMenu
          anchor={AvatarMenu}
          visible={showMenu}
          placement="bottom end"
          onBackdropPress={() => setShowMenu(false)}
        >
          <MenuItem
            title={`${lang ? 'Espa;ol' : 'English'}`}
            accessoryRight={() => (
              <Toggle checked={lang} onChange={setLang}></Toggle>
            )}
          />
          <MenuItem
            title={`Mode ${theme.value ? '🌑' : '🌞'}`}
            accessoryRight={() => (
              <Toggle checked={theme.value} onChange={toggleTheme}></Toggle>
            )}
          />
          <MenuItem title="Logout" onPress={() => console.log('object')} />
        </OverflowMenu>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 80,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default HeaderNavigator;
