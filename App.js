import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'

export default function App() {

  const [pos, setpos] = useState(-110)
  const [Offline, isOffline] = useState("#17b978")
  const [Profiles, isProfiles] = useState(-600)
  const Friends = ["Marius", "Kylian", "Koen"]
  var i;

  function ChangePos() {
    if (pos == -110) {
      setpos(10)
    } else {
      setpos(-110)
    }
  }

  function Online(){
    if (Offline == "#17b978") {
      isOffline("#ff304f")
    } else {
      isOffline("#17b978")
    }
  }

  function Profilepage() {
    if (Profiles == -650) {
      isProfiles(0)
    } else {
      isProfiles(-650)
    }
  }

  function FriendFunction() {
    for (i = 0; i < Friends.length; i++) {
      return(
        <View>
                  <TouchableOpacity>
          <View style={styles.Friends}>
            <Text style={styles.Textcard}>
              {Friends[i]}
            </Text>
            <Text style={styles.Textcard}>
              Status
            </Text>
            <Text style={styles.Textcard}>
              What Game
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Friends}>
            <Text style={styles.Textcard}>
              {Friends[i]}
            </Text>
            <Text style={styles.Textcard}>
              Status
            </Text>
            <Text style={styles.Textcard}>
              What Game
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.App}>
      <View style={[styles.ProfilePage, {top: Profiles}]}>
        <TouchableOpacity>
          <Text style={styles.Login}>
            Login
          </Text>
        </TouchableOpacity>
        <TextInput style={styles.name}>

        </TextInput>
        <TextInput style={styles.name}>

        </TextInput>
        <TouchableOpacity onPress={Profilepage}>
          <Text style={styles.Close}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Profile} onPress={Profilepage}>
        <Text>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.Online, { backgroundColor: Offline }]} onPress={ChangePos}>
        <Text>
          Friends
        </Text>
      </TouchableOpacity>
      <ScrollView left={pos} style={styles.FriendsScroll}>
        {FriendFunction()}
      </ScrollView>
      <ScrollView style={styles.ActivityScroll}>
        <View style={styles.Activitys}>
          <Text>
            Title
          </Text>
        </View>
        <View style={styles.ActivityText}>
          <Text>
            Text
          </Text>
        </View>
        <View style={styles.Activitys}>
          <Text>
            Title
          </Text>
        </View>
        <View style={styles.ActivityText}>
          <Text>
            Text
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: "#364f6b",
  },
  Login: {
    position: "relative",
    borderWidth: 2,
    width: 70,
    fontSize: 25,
    top: 220,
    left: 140,
    borderRadius: 0,
    backgroundColor: "#fff"
  },
  Close: {
    borderWidth: 2,
    borderRadius: 0,
    width: 55,
    position: "relative",
    top: 240,
    left: 150,
    fontSize: 20,
    backgroundColor: "#fff"
  },
  name: {
    position: "relative",
    top: 100,
    left: 100,
    borderWidth: 2,
    width: 150,
    fontSize: 20,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  ProfilePage: {
    borderWidth: 4,
    borderRadius: 20,
    height: 500,
    width: 350,
    position: "relative",
    left: 30,
    zIndex: 2,
    backgroundColor: "#40514e",
  },
  Profile: {
    position: "relative",
    left: 320,
    top: -510,
    borderRadius: 20,
    borderWidth: 2,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Online: {
    borderWidth: 2,
    width: 100,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: 35,
    top: -540,
    marginBottom: 10,
    borderRadius: 10,
  },
  Friends: {
    borderWidth: 2,
    width: 150,
    height: 110,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    backgroundColor: "#fff",
  },
  Textcard: {
    fontSize: 18,
  },
  Activitys: {
    borderWidth: 2,
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  ActivityText: {
    borderWidth: 2,
    width: 300,
    height: 250,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ActivityScroll: {
    position: "relative",
    left: 65,
    top: -1740,
    height: 800
  },
  FriendsScroll: {
    height: 1200,
    width: 155,
    zIndex: 1,
    position:"relative",
    top: -540,
  },
});
