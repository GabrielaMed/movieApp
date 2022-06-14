import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBack() {
  const navigation = useNavigation();

  return (
    <Button
      title="Go Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}