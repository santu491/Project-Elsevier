import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon} from '../../assets/Icons';
import Card from '../../components/Card/Card';
import {Spinner} from '../../components/Loader';
import {styles} from './postOfficeList.styles';
import {usePostOfficeList} from './usePostOfficeList';

const PostOfficeList = () => {
  const {
    getCity,
    hasError,
    getData,
    isLoading,
    onChangeInput,
    getPostOfficeDetails,
  } = usePostOfficeList();

  return (
    <View style={styles.container}>
      <Spinner isLoading={isLoading} />

      <View style={styles.inputView}>
        <TextInput
          placeholder={'Enter City Name'}
          onChangeText={onChangeInput}
          style={styles.input}
        />
        {getCity.length > 0 && (
          <TouchableOpacity onPress={getPostOfficeDetails}>
            <SearchIcon />
          </TouchableOpacity>
        )}
      </View>

      <>
        {hasError ? (
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{`${getData?.Message}...!!`}</Text>
          </View>
        ) : (
          getData?.PostOffice?.length > 0 && (
            <>
              <FlatList
                data={getData?.PostOffice}
                renderItem={({item}) => <Card data={item} />}
                keyExtractor={(_, index) => index}
                ListHeaderComponent={() => (
                  <Text
                    style={[
                      styles.Results,
                    ]}>{`Results:${getData?.PostOffice?.length}`}</Text>
                )}
              />
            </>
          )
        )}
      </>
    </View>
  );
};

export default PostOfficeList;
