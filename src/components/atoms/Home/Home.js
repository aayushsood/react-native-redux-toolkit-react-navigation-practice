import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NewAtomicComponent from "../NewAtomicComponent/NewAtomicComponent";
import {
  fetchUsers,
  showHideDiv,
} from "../../../slices/showADivSlice/showADivSlice";
import { useDispatch, useSelector } from "react-redux";
import { addParamToTheValue } from "../../../slices/incrementCountByValue/incrementCountByValue";

const Home = ({ navigation }) => {
  const isDivVisible = useSelector((state) => state.showDiv.value);
  const countValue = useSelector((state) => state.incrementValues.value);
  const usersData = useSelector((state) => state.showDiv.apiDataOne.userData);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainContiner}>
      <View style={styles.insideParentContainer}>
        <View style={styles.childContainerOne}>
          <Text> Details:</Text>
          <NewAtomicComponent />
        </View>
        <View style={styles.childContainerTwo}>
          <Text>Hey wassup</Text>
        </View>
      </View>
      <View style={styles.touchableOpacityContainer}>
        <TouchableOpacity
          style={{ backgroundColor: "#C0C0C0", borderRadius: 5, padding: 5 }}
          onPress={() => {
            navigation.navigate("Counter");
          }}
        >
          <Text>Go To Counter </Text>
        </TouchableOpacity>
      </View>

      {isDivVisible && (
        <View
          style={{
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ backgroundColor: "cyan" }}>
            I am a text that can be hidden
          </Text>
        </View>
      )}

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#C0C0C0",
            borderRadius: 5,
            padding: 5,
            marginTop: 5,
            width: "50%",
          }}
          onPress={() => {
            dispatch(showHideDiv());
          }}
        >
          <Text style={{ textAlign: "center" }}>Show and hide div </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ textAlign: "center" }}>{countValue}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#C0C0C0",
            borderRadius: 5,
            padding: 5,
            marginTop: 5,
            width: "50%",
          }}
          onPress={() => {
            dispatch(addParamToTheValue({ value: 10 }));
          }}
        >
          <Text style={{ textAlign: "center" }}>Increment By 10</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#C0C0C0",
            borderRadius: 5,
            padding: 5,
            marginTop: 5,
            width: "50%",
          }}
          onPress={() => {
            dispatch(fetchUsers());
          }}
        >
          <Text style={{ textAlign: "center" }}>Fetch Users</Text>
        </TouchableOpacity>
      </View>

      <View style={{ display: "flex", alignItems: "center" }}>
        {usersData?.map((val, i) => {
          return (
            <Text key={i} style={{ width: "50%" }}>
              {val.username}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
  },
  childContainerOne: {
    backgroundColor: "yellow",
  },
  childContainerTwo: {
    backgroundColor: "red",
  },

  insideParentContainer: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
  },
  touchableOpacityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
  },
  backgroundOpacity: {
    backgroundColor: "#C0C0C0",
    padding: 4,
    borderRadius: 5,
  },
});
