import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useGetCharacterListQuery} from '../Store/Services/rickAndMortyApi';
import {LoadingContext} from '../Common/contexts/LoadingProvider';
import {Character} from '../Common/types/Api';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../Common/constants/navigation';
import {MainNavigationProps} from '../Common/types/Navigation';

type ItemProps = {
  character: Character;
};

const RenderItem = ({character}: ItemProps) => {
  const navigation = useNavigation<MainNavigationProps>();
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: `${character.image}`,
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemContentHeader}>{character.name}</Text>
        <Text style={styles.itemContentText}>{character.status}</Text>
        <Text style={styles.itemContentText}>{character.type}</Text>
      </View>
      <View style={styles.itemButton}>
        <Button
          onPress={() => {
            navigation.navigate(HOME_SCREEN);
          }}
          title="Home"
        />
      </View>
    </View>
  );
};

const CharacterList = () => {
  const {data, isError, isLoading} = useGetCharacterListQuery();
  const {toggleLoading} = useContext(LoadingContext);

  useEffect(() => {
    if (isLoading) {
      toggleLoading(true);
    } else {
      toggleLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      console.log(isError, 'ERROR');
    }
  }, [isError]);

  return (
    <SafeAreaView>
      {!isLoading && data && data.results && (
        <FlatList
          data={data.results}
          renderItem={({item}) => {
            return <RenderItem character={item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemContent: {
    alignItems: 'center',
    marginHorizontal: 5,
    flex: 1,
  },
  itemContentHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContentText: {
    textAlign: 'center',
  },
  itemButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
