import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import Fontsizes from "../../styles/fontsizes";

import Colors from "../../styles/colors";
import { AppBar, TabBar } from "../../common/commonIndex";
import getAlbumScreenStyles from "./AlbumScreenStyles";
import Card from "../../components/Album/Card";
import { Searchbar } from "react-native-paper";

import { useGetAlbum, useSearchAlbum } from "../../viewmodels/albumViewModels";
import useAccessToken from "../../models/accessToken";
import { SafeAreaView } from "react-native-safe-area-context";

const AlbumScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const [search, setSearch] = useState("");
  const { width, height } = useWindowDimensions();
  const albumStyles = getAlbumScreenStyles(width, height);

  const { albums: defaultAlbums, loading: defaultLoading } =
    useGetAlbum(accessToken);
  const { albums: searchedAlbums, loading: searchLoading } = useSearchAlbum(
    search,
    accessToken,
  );

  const isSearching = search.trim().length > 0;
  const albumsToDisplay = isSearching ? searchedAlbums : defaultAlbums;
  const loading = isSearching ? searchLoading : defaultLoading;

  return (
    <>
      <AppBar />
      <SafeAreaView style={albumStyles.safeArea}>
        <View style={albumStyles.backgroundStyle}>
          <Searchbar
            placeholder="검색"
            onChangeText={setSearch}
            value={search}
            icon="favorite"
            style={albumStyles.searchBar}
            inputStyle={albumStyles.searchBarInput}
            contentStyle={albumStyles.searchBarContent}
          />
          <Text style={albumStyles.albumText}>내 추억 앨범</Text>

          <View style={albumStyles.albumListsWrapper}>
            {loading ? (
              <ActivityIndicator size="large" color={Colors.orange} />
            ) : (
              <FlatList
                contentContainerStyle={albumStyles.albumLists}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                columnWrapperStyle={albumStyles.albumListsRowColumn}
                data={albumsToDisplay}
                renderItem={({ item }) => (
                  <Card
                    navigation={navigation}
                    album_id={item.album_id}
                    album_title={item.album_title}
                    location={item.location}
                    album_tag={item.album_tag}
                    album_image={
                      typeof item.album_image === "string"
                        ? { uri: item.album_image }
                        : item.album_image
                    }
                  />
                )}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />
    </>
  );
};

export default AlbumScreen;
