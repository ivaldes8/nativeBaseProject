import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterStack} from '../../Common/types/Navigation';
import {
  CHARACTERS_LIST_SCREEN,
  CHARACTER_EDIT_SCREEN,
} from '../../Common/constants/navigation';
import CharacterList from './CharacterList';
import CharacterEdit from './CharacterEdit';
import {User} from '../../Common/types/Api';
import {useAppSelector} from '../../Store/hooks';
import {selectUser} from '../../Store/Reducers/loginSlice';

const CharacterNavigator = () => {
  const CharacterStackNav = createNativeStackNavigator<CharacterStack>();

  const user: User = useAppSelector(selectUser);

  return (
    <CharacterStackNav.Navigator initialRouteName={CHARACTERS_LIST_SCREEN}>
      <CharacterStackNav.Screen
        name={CHARACTERS_LIST_SCREEN}
        component={CharacterList}
      />
      {user && user.name !== '' && (
        <CharacterStackNav.Screen
          name={CHARACTER_EDIT_SCREEN}
          component={CharacterEdit}
        />
      )}
    </CharacterStackNav.Navigator>
  );
};

export default CharacterNavigator;
