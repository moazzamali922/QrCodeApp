import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Components/Header';
import QRCode from 'react-native-qrcode-svg';
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';

const QrCodeGenerator = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const onSelectColor = ({hex}) => {
    setSelectedColor(hex);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/* Header */}
        <View style={{width: '100%', height: 50}}>
          <Header />
        </View>

        {/* QrCodeContainer */}
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.button, {}]}>
            <Image
              style={styles.IconButton}
              source={require('./assets/url.png')}
            />
            <Text style={styles.buttonText}>URL</Text>
          </TouchableOpacity>

          {/* QrInput */}
          <TextInput
            style={styles.input}
            placeholder="https://www.google.com"
          />

          {/* QrCode */}
          <View style={styles.QRCode}>
            <QRCode size={200} logo={40} color={selectedColor} />
          </View>

          {/* SelectColor */}
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderWidth: 2,
              padding: 15,
              marginVertical: 20,
              borderRadius: 10,
            }}
            onPress={() => setShowModal(true)}>
            <Text style={{fontSize: 18}}>Select Color</Text>
          </TouchableOpacity>

          {/* ColorPickerModal */}
          <Modal visible={showModal} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.colorPickerContainer}>
                <ColorPicker
                  style={{
                    width: '90%',
                    height: 300,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  value={selectedColor}
                  onComplete={onSelectColor}>
                  <Preview />
                  <Panel1 />
                  <HueSlider />
                  <OpacitySlider />
                  {/* <Swatches /> */}
                </ColorPicker>
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </Modal>

          {/* Buttons  */}
          <View style={styles.GenerateDownloadButton}>
            {/* GenerateButton  */}
            <TouchableOpacity style={styles.GenerateButton}>
              <Text style={{textAlign: 'center', fontSize: 17}}>
                Generate Button
              </Text>
            </TouchableOpacity>
            {/* DownloadButton  */}
            <TouchableOpacity style={styles.DownloadButton}>
              <Text style={{textAlign: 'center', fontSize: 17}}>
                Download Button
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QrCodeGenerator;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
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
  input: {
    borderWidth: 1,
    borderColor: '#abb8c3',
    borderRadius: 15,
    padding: 10,
    color: '#000',
  },
  QRCode: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  GenerateDownloadButton: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  GenerateButton: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BC34A',
    borderRadius: 25,
  },
  DownloadButton: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    borderRadius: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  colorPickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '90%',
    height: 400, // Increase the height to accommodate color picker and close button
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
  },
});
