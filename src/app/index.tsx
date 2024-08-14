import { useResponsive } from '@/shared/hooks/useResponsive';
import { GetItem, SetItem } from '@/shared/hooks/useStorage';
import { colors, fonts } from '@/shared/theme';
import Clock from '@assets/slides/clock.png';
import Graph from "@assets/slides/graph.png";
import Notification from "@assets/slides/notification.png";
import Profile from "@assets/slides/profile.png";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SlideProps } from '../shared/interfaces';

export default function App() {
  const router = useRouter()
  const slides = [
    {
      id: 1,
      title: "Não perca mais tempo",
      description: "Faça seus orçamentos de forma rápida e prática direto no seu celular.",
      image: Clock,
    },
    {
      id: 2,
      title: "Crie seu perfil",
      description: "Crie seu perfil, com suas habilidades, especialidades e custos por hora.",
      image: Profile,
    },
    {
      id: 3,
      title: "Controle tudo",
      description: "Controle seu tempo criando tarefas e sub-tarefas, para detalhar todo o andamento do projeto",
      image: Graph,
    },
    {
      id: 4,
      title: "Receba notificações",
      description: "Seja notificado de todo o andamento do trabalho do seu contratado e da sua tarefa.",
      image: Notification,
    },
  ];


const renderItem = ({ item }: SlideProps) => {
  return (
    <View style={S.container} key={item.id}>
      <Text style={S.title}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={imageStyle.image} />
      <Text style={S.description}>{item.description}</Text>
    </View>
  );
};


const onDone = () => {
  SetItem("isOnboarded", "true");
  router.push("/Auth/Login");
}
useEffect(() => {
  async function fetchData() {
    const value = await GetItem("isOnboarded");
    if (value) {
      router.replace("/Auth/Login");
    }
  }
  fetchData();
}, []);

return(
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showNextButton
      showDoneButton
      showPrevButton
      renderNextButton={() => <MaterialIcons name="navigate-next" size={30} color={colors.black} />}
      renderPrevButton={() => <MaterialIcons name="navigate-before" size={30} color={colors.black} />}
      renderDoneButton={() =>  <MaterialIcons name="check" size={30} color={colors.black} /> }
    />
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: useResponsive(20) ?? 20,
    fontFamily: fonts.heading,
    color: colors.text,
    textAlign: 'center',
  },
  description: {
    fontSize: useResponsive(14),
    fontFamily: fonts.body,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  
 
});

const imageStyle = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
    marginVertical: 70,
  },
});