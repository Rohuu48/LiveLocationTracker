import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import Space from "./Space";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import { KeyboardAvoidingView } from "react-native";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <KeyboardAvoidingView>
        <Space>
          <Input
            value={name}
            onChangeText={changeName}
            placeholder="Enter name of your track"
          />
          {recording ? (
            <Button title="Stop" onPress={stopRecording} />
          ) : (
            <Button title="Start Recording" onPress={startRecording} />
          )}
        </Space>
        <Space>
          {!recording && locations.length ? (
            <Button title="Save recording" onPress={saveTrack} />
          ) : null}
        </Space>
      </KeyboardAvoidingView>
    </>
  );
};
export default TrackForm;
