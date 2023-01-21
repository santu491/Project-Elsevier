import React from 'react';
import {ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

export const Spinner = ({isLoading = false}: {isLoading?: boolean}) => {
  return (
    <Modal isVisible={isLoading}>
      <ActivityIndicator size="large" />
    </Modal>
  );
};
