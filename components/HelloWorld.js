import React, {useState} from 'react'
import { Text, View, Button, TextInput, ScrollView } from 'react-native'


const HelloWorld = () => {
    const [frogColor, changeColor] = useState('green')
    const [song, addToSong] = useState('')
    const swap = {'red': 'blue', 'green': 'red', 'blue': 'orange', 'orange': 'purple', 'purple': 'green'}

    return <ScrollView>
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>Hello World!</Text>
        <Text style={{
            color: 'red'
        }}>This is a song. La la la la. Elmo's song. {song}</Text>
        <Text style={{
            color: frogColor
        }}>Why are there so many songs about rainbows and what's on the other side?</Text>
        <Button 
            onPress={() => changeColor(swap[frogColor])} 
            title="Change Kermit's Color" 
        />
    </View>
    <View style={{
        padding: 20, 
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>Change the lyrics!</Text>
        <TextInput
            // backgroundColor='white'
            style={{height: 40, backgroundColor: 'white'}}
            placeholder="Add more lyrics to Elmo's song"
            onChangeText={(text) => addToSong(text)}
            defaultValue={song}
        />
    </View>
</ScrollView>
}

export default HelloWorld