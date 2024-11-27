import React from 'react';
import {View, Text, StyleSheet, StatusBar, SectionList, Button, TouchableOpacity, TextInput} from 'react-native';
import {Image} from "react-native";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    arrangementStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderWidth: 1,
    },

    textStyle: {
        fontSize:15,
        marginLeft:10,
        textAlign:"center",
        flex: 1,

    },

    headerText: {
        fontSize: 25,
        margin: 10,
        color: 'white',
        textAlign: "center",
        fontWeight: 'bold'
    },

    image: {
        width: 180,
        height: 250,
        margin: 10,
        resizeMode: 'cover',
    },

})


// const renderItem = ({item}) => {
//     return (
//         <View style={styles.arrangementStyle}>
//             <Text style={styles.textStyle}>{item.key}{'\n'}{item.typeC}{'\n'}{'\n'}{'\n'}{item.entry}</Text>
//             <Image source={{uri: item.image}} style={styles.image} />
//         </View>
//     )
// }



const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.arrangementStyle}
                  onPress={() => {navigation.navigate("Edit", {index:index, type:section.title, key:item.key, entry:item.entry, typeC:item.typeC, image:item.image})}
                  }
            >
                <Text style={styles.textStyle}>{'\n'}{item.key}{'\n'}{item.typeC}{'\n'}{'\n'}{item.entry}</Text>
                <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{
            backgroundColor:"white",
            marginTop: 50,
            marginBottom:50}}>
            <StatusBar hidden={true} />
            <Button title='Add Character' onPress={() => {navigation.navigate("Add")}} />
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgColour}}) => (
                             <Text style={[styles.headerText, {backgroundColor: bgColour}]}>{title}</Text>
                         )}
            />
        </View>
    );
};

export default Home;
