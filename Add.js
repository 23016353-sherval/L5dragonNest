import React, {useState} from "react";
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [character, setCharacter] = useState('');
    const [typeC, setTypeC] = useState('');
    const [entry, setEntry] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Character:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setCharacter(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Specialization:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setTypeC(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Entry:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setEntry(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text>Image:</Text>
                <TextInput style={{borderWidth: 1, marginBottom: 20}} placeholder="URL link"onChangeText={(text) => setImage(text)}/>
            </View>
            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label:"Warrior", value:"Warrior Classes"},
                        {label:"Archer", value:"Archer Classes"},
                        {label:"Sorceress", value:"Sorceress Classes"},
                        {label:"Cleric", value:"Cleric Classes"},
                        {label:"Academic", value:"Academic Classes"},
                        {label:"Kali", value:"Kali Classes"},
                        {label:"Assassin", value:"Assassin Classes"},
                        {label:"Lancea", value:"Lancea Classes"},
                        {label:"Machina", value:"Machina Classes"},
                        {label:"Dragon", value:"Dragons"},
                    ]}
                />
            </View>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {key:character, typeC:typeC, entry:entry, image:image};
                        let indexNum = 0;
                        if (type == "Warrior Classes") {
                            indexNum = 0;
                        }if (type == "Archer Classes") {
                            indexNum = 1;
                        }if (type == "Sorceress Classes") {
                            indexNum = 2;
                        }if (type == "Cleric Classes") {
                            indexNum = 3;
                        }if (type == "Academic Classes") {
                            indexNum = 4;
                        }if (type == "Kali Classes") {
                            indexNum = 5;
                        }if (type == "Assassin Classes") {
                            indexNum = 6;
                        }if (type == "Lancea Classes") {
                            indexNum = 7;
                        }if (type == "Machina Classes") {
                            indexNum = 8;
                        }if (type == "Dragons") {
                            indexNum = 9;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
                    }
            />
        </View>
    );
};

export default Add;
