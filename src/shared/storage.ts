import AsyncStorage from '@react-native-async-storage/async-storage'

const SetItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch(error) {
    console.log(error)
  }
}

const GetItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch(error) {
    console.log(error)
  }
}

export { GetItem, SetItem }
