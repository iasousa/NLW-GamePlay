import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
  const image = user.avatar.split('/');

  function handleOpenSignOut() {
    setOpenSignOutModal(true);
  }

  function handleCloseSignOut() {
    setOpenSignOutModal(false);
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={handleOpenSignOut}>
        {
          image[image.length - 1] === 'null.png' ?
            <FontAwesome5
              name="user-alt"
              size={46}
              color={theme.colors.heading}
              style={styles.image}
            /> :
            <Avatar urlImage={user.avatar} />
        }
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

      <Modal
        visible={openSignOutModal}
        transparent
        animationType="slide"
        statusBarTranslucent
      >
        <View style={styles.signOut}>
          <Text style={styles.titleSignOut}>
            Deseja sair do Game<Text style={styles.play}>Play</Text>?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleCloseSignOut}
              style={styles.buttonNo}
            >
              <Text style={styles.buttonNoText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signOut}
              style={styles.buttonYes}
            >
              <Text style={styles.buttonYesText}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}