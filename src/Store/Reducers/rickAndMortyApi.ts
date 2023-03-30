import {Character} from '../../Common/types/Api';
import {CharacterList} from '../../Common/types/Api';
// Need to use the React-specific entry point to allow generating React hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api/'}),
  tagTypes: ['Characters', 'Character'],
  endpoints: builder => ({
    getCharacterList: builder.query<CharacterList, void>({
      query: () => 'character',
      providesTags: ['Characters'],
    }),
    getCharacter: builder.query<Character, string>({
      query: id => `character/${id}`,
      providesTags: ['Character'],
    }),
  }),
});
export const {useGetCharacterListQuery, useGetCharacterQuery} = rickAndMortyApi;
