import { View, Pressable } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {Camera, CameraType, FlashMode, VideoQuality} from "expo-camera";
import { MaterialIcons } from '@expo/vector-icons';

const PostUploadScreen = () => {
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isRecording, setIsRecording] = useState(false)
    const [flash, setFlash] = useState(FlashMode.off);
    // const [permission, requestPermission] = Camera.useCameraPermissions();
    // console.log(permission)
    const insets = useSafeAreaInsets();
    const camera = useRef(null);

    const flashModes = [
        FlashMode.off,
        FlashMode.on,
        FlashMode.auto,
        FlashMode.torch,
    ];

    const flashModeToIcon = {
        [FlashMode.off]: 'flash-off',
        [FlashMode.on]: 'flash-on',
        [FlashMode.auto]: 'flash-auto',
        [FlashMode.torch]: 'highlight',
    }

    useEffect(() => {
        const getPermission = async () => {
            const cameraPermisison = await Camera.requestCameraPermissionsAsync();
            const microphonePermisison = await Camera.requestMicrophonePermissionsAsync();
        }
        getPermission();
    }, []);

    const flipCamera = () => {
        setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const toggleFlash = () => {
        const currentIndex = flashModes.indexOf(flash);
        const nextIndex = currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;

        setFlash(flashModes[nextIndex])
    }

    const takePicture = async () => {
        if(!isCameraReady || !camera.current || isRecording) {
            return;
        }
        const options = {
            quality: 0.5,
            base64: true,
            skipProcessing: true,
        };
        const result = await camera.current.takePictureAsync(options);
        // console.log(result)
    }

    const startVideo = async () => {
        if(!isCameraReady || !camera.current || isRecording) {
            return;
        }

        const options = {
            quality: VideoQuality['4:3'],
            maxDuration: 60,
            maxFileSize: 10 * 1024 * 1024,
            mute: false,
        };
        setIsRecording(true);
        try {
            const result = await camera.current.recordAsync(options);
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
        setIsRecording(false)
    }

    const stopVideo = () => {
        if(isRecording) {
            camera.current?.stopRecording();
            setIsRecording(false)
        }
    }
    // console.log(flash)

    // if (!permission?.granted) {
    // return <Text>No access to the camera</Text>
    // }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
        ref={camera}
      />
      <View style={[styles.buttonsContainer, { top: insets.top }]}>
            <MaterialIcons name="close" size={30} color="white" />
            <MaterialIcons name={flashModeToIcon[flash]} size={30} color="white" onPress={toggleFlash}/>
            <MaterialIcons name="settings" size={30} color="white" />
      </View>

      <View style={[styles.buttonsContainer, { bottom: insets.bottom }]}>
            <MaterialIcons name="photo-library" size={30} color="white" />
            {isCameraReady && <Pressable style={[styles.shutterCircle, {backgroundColor: isRecording ? 'red' : 'white'}]} onPress={takePicture} onLongPress={startVideo} onPressOut={stopVideo}/>}
            <MaterialIcons name="flip-camera-ios" size={30} color="white" onPress={flipCamera}/>
      </View>
    </View>
  )
}

export default PostUploadScreen