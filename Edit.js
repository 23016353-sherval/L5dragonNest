import React, {useState} from 'react';
import {datasource} from "./Data.js";
import {TextInput, View, Text, Button, StyleSheet, Alert} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        padding:10,
        borderRadius: 5,
    }
})

const getIndexNum = (type) => {
    const classTypes = [
        'Warrior Classes', 'Archer Classes', 'Sorceress Classes', 'Cleric Classes', 'Academic Classes',
        'Kali Classes', 'Assassin Classes', 'Lancea Classes', 'Machina Classes', 'Dragons'
    ];
    return classTypes.indexOf(type);
};

const Edit = ({navigation, route}) => {
    const [character, setCharacter] = useState(route.params.key);
    const [typeC, setTypeC] = useState(route.params.typeC);
    const [entry, setEntry] = useState(route.params.entry);
    const [image, setImage] = useState(route.params.image);

    const indexNum = getIndexNum(route.params.type);

    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Character:</Text>
                <TextInput value={character} style={{borderWidth: 1}} onChangeText={(text) => setCharacter(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Specialization:</Text>
                <TextInput value={typeC} style={{borderWidth: 1}} onChangeText={(text) => setTypeC(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Entry:</Text>
                <TextInput value={entry} style={{borderWidth: 1}} onChangeText={(text) => setEntry(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text>Image:</Text>
                <TextInput value={image} style={{borderWidth: 1, marginBottom: 20}} placeholder="URL link" onChangeText={(text) => setImage(text)}/>
            </View>
            <View style={styles.button}>
                <View style={{width: 175}}>
                    <Button title="Save"
                            onPress={() => {
                                // let indexNum = 0;
                                // if (route.params.type == 'Warrior'){
                                //     indexNum = 0;
                                // } else if (route.params.type == 'Archer'){
                                //     indexNum = 1;
                                // } else if (route.params.type == 'Sorceress'){
                                //     indexNum = 2;
                                // } else if (route.params.type == 'Cleric'){
                                //     indexNum = 3;
                                // } else if (route.params.type == 'Academic'){
                                //     indexNum = 4;
                                // } else if (route.params.type == 'Kali'){
                                //     indexNum = 5;
                                // } else if (route.params.type == 'Assassin'){
                                //     indexNum = 6;
                                // } else if( route.params.type == 'Lancea'){
                                //     indexNum = 7;
                                // } else if (route.params.type == 'Machina'){
                                //     indexNum = 8;
                                // } else if (route.params.type == 'Dragon'){
                                //     indexNum = 9;
                                // }
                                // datasource[indexNum].data[route.params.index].key=character;
                                datasource[indexNum].data[route.params.index] = {
                                    key: character,
                                    typeC: typeC,
                                    entry: entry,
                                    image: image,
                                }
                                navigation.navigate("Home");
                            }
                            }
                    />
                </View>

                <View style={{width: 175}}>
                    <Button title="Delete"
                            onPress={() => {
                                // let indexNum = 0;
                                // if(route.params.type == 'Warrior'){
                                //     indexNum = 0;
                                // }else if(route.params.type == 'Archer'){
                                //     indexNum = 1;
                                // }else if(route.params.type == 'Sorceress'){
                                //     indexNum = 2;
                                // }else if(route.params.type == 'Cleric'){
                                //     indexNum = 3;
                                // }else if(route.params.type == 'Academic'){
                                //     indexNum = 4;
                                // }else if(route.params.type == 'Kali'){
                                //     indexNum = 5;
                                // }else if(route.params.type == 'Assassin'){
                                //     indexNum = 6;
                                // }else if(route.params.type == 'Lancea'){
                                //     indexNum = 7;
                                // }else if (route.params.type == 'Machina'){
                                //     indexNum = 8;
                                // }else if (route.params.type == 'Dragon'){
                                //     indexNum = 9;
                                // }
                                Alert.alert("Are you sure?", '',
                                    [{text:'Yes', onPress: () => {
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
