import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Permission,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Header from './Components/Header';

const Create = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/* Render the Header component */}

        <View style={{width: '100%', height: 50}}>
          <Header />
        </View>
        <Text style={{padding: 10, color: '#000', fontSize: 16}}>
          Create QR
        </Text>
        <View style={styles.mainContainer}>
          {/* TouchableOpacity for different actions */}

          {/* URl */}

          <TouchableOpacity style={[styles.button, {}]}>
            <Image
              style={styles.IconButton}
              source={require('./assets/url.png')}
            />
            <Text style={styles.buttonText}>URL</Text>
          </TouchableOpacity>

          {/* TEXT  */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/text.png')}
            />
            <Text style={styles.buttonText}>TEXT</Text>
          </TouchableOpacity>

          {/* Email  */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/email.png')}
            />
            <Text style={styles.buttonText}>EMAIL</Text>
          </TouchableOpacity>
          {/* PHONE  */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/pin.png')}
            />
            <Text style={styles.buttonText}>PHONE</Text>
          </TouchableOpacity>

          {/* SMS  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/chat.png')}
            />
            <Text style={styles.buttonText}>SMS</Text>
          </TouchableOpacity>

          {/* VCARD  */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/card.png')}
            />
            <Text style={styles.buttonText}>VCARD</Text>
          </TouchableOpacity>

          {/* MECARD  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/card.png')}
            />
            <Text style={styles.buttonText}>MECARD</Text>
          </TouchableOpacity>

          {/* LOCATION  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/pin.png')}
            />
            <Text style={styles.buttonText}>LOCATION</Text>
          </TouchableOpacity>

          {/* FACEBOOK  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/facebook.png')}
            />
            <Text style={styles.buttonText}>FACEBOOK</Text>
          </TouchableOpacity>

          {/* TWITTER  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/twitter.png')}
            />
            <Text style={styles.buttonText}>TWITTER</Text>
          </TouchableOpacity>

          {/* YOUTUBE  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/facebook.png')}
            />
            <Text style={styles.buttonText}>YOUTUBE</Text>
          </TouchableOpacity>

          {/* WIFI  */}

          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/pin.png')}
            />
            <Text style={styles.buttonText}>WIFI</Text>
          </TouchableOpacity>

          {/* EVENT  */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.IconButton}
              source={require('./assets/pin.png')}
            />
            <Text style={styles.buttonText}>EVENT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: '#fff',
    width: '97%',
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonText: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  IconButton: {
    width: 20,
    height: 20,
  },
});
