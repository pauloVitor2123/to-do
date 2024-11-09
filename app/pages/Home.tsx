import React from "react";
import { Colors } from "@/app/constants/Colors";
import { useColorScheme } from "@/app/hooks/useColorScheme.web";
import { StatusBar, Text, View } from "react-native";
import { Header } from "../components/atoms/Header";
import { SearchContainer } from "../components/molecules/Search";
import { List } from "../components/organisms/List";
import { useToDoHook } from "../hooks/useToDoHook";

export const Home = () => {
  const colorScheme = useColorScheme();
  const { toDoItems } = useToDoHook();
  const theme = colorScheme as "dark" | "light";

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={{ backgroundColor: Colors.dark.base.gray600, flex: 1 }}>
        <Header />
        <SearchContainer />
        <List />
      </View>
    </>
  );
};
