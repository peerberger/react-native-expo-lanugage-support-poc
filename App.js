import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { en, he } from './localizations';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default function App() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, he };
  i18n.locale = locale;

  return (
    <View style={styles.container}>

      {locale !== 'en' ? <Button title='English' onPress={() => setLocale('en')} /> : undefined}
      {locale !== 'he' ? <Button title='Hebrew' onPress={() => setLocale('he')} /> : undefined}

      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('hello')}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
