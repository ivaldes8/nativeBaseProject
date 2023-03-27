import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigationProps} from '../Common/types/Navigation';
import {COUNTER_SCREEN, PROFILE_SCREEN} from '../Common/constants/navigation';

const Home = () => {
  const navigation = useNavigation<MainNavigationProps>();
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate(PROFILE_SCREEN, {userId: '2'});
        }}
        title="To Profile"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          navigation.navigate(COUNTER_SCREEN);
        }}
        title="To Counter"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;
