import React, { useEffect, useState } from "react"
import { Text, TextField, Button, Toggle } from "../components"
import { View } from "react-native"

function AddMovie() {
  const [movieName, setMovieName] = useState("")
  const [movieCategory, setMovieCategory] = useState("")
  const [movieRating, setMovieRating] = useState(1)
  const [isFavourite, setIsFavourite] = useState(false)

  const ratingUp = () => {
    if (movieRating >= 10) {
      return
    }
    setMovieRating(movieRating + 1)
  }

  const ratingDown = () => {
    if (movieRating <= 1) {
      return
    }
    setMovieRating(movieRating - 1)
  }

  return (
    <View>
      <Text>Add new movies here</Text>
      <View style={$movieContainer}>
        <View style={$container}>
          <Text>Name</Text>
          <TextField
            value={movieName}
            placeholder="Enter Movie Name"
            onChangeText={(value) => setMovieName(value)}
          />
        </View>
        <View style={$container}>
          <Text>Category</Text>
          <TextField
            value={movieCategory}
            placeholder="Movie Category"
            onChangeText={(value) => setMovieCategory(value)}
          />
        </View>

        <View style={$container}>
          <Text>Rating: </Text>
          <Button onPress={() => ratingUp()}>+</Button>
          <Text>{movieRating} </Text>
          <Button onPress={() => ratingDown()}>-</Button>
        </View>
        <View style={$container}>
          <Text>Favourite</Text>
          <Toggle
            value={isFavourite}
            onValueChange={() => setIsFavourite(!isFavourite)}
            variant="checkbox"
            checkboxIcon="check"
          />
        </View>
      </View>
    </View>
  )
}

const $movieContainer = {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  flexDirection: "row",
  flex: 1,
}

const $container = {
  justifyContent: "spaceBetween",
  alignItems: "stretch",
  margin: 24,
  flex: 1,
}

export default AddMovie
