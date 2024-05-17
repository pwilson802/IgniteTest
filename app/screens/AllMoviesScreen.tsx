import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { Text, Button } from "app/components"
import AddMovie from "app/components/AddMovie"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

interface AllMoviesScreenProps extends AppStackScreenProps<"AllMovies"> {}

export const AllMoviesScreen: FC<AllMoviesScreenProps> = observer(function AllMoviesScreen() {
  return (
    <View style={$container}>
      <Text size="lg"> Movies Screen </Text>
      <AddMovie />
    </View>
  )
})

const $buttonStyle = {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  padding: 10, // adjust padding as needed
  borderWidth: 1, // add a border
  borderColor: "black", // or any color you prefer
  borderRadius: 5, // optional, for rounded corners
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "center",
}

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}
