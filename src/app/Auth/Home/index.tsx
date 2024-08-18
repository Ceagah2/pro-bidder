import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import CustomModal from "@/components/Modal";
import { colors } from "@/shared/theme";
import { JobsProps } from "@/shared/types/Jobs";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { S } from "./styles";

export default function Home() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [jobs, setJobs] = useState<JobsProps[]>([]);
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter()
  const handleNavigation = (itemId: string) => {
    if(itemId) {
       router.push(`/Auth/NewJob/${itemId}`)
    } else {
      router.push('/Auth/NewJob')
    }
  }

  const renderJobItem = ({ item }: JobsProps) => (
    <TouchableOpacity
      style={S.jobItem}
      onPress={() => handleNavigation(item.id)}
    >
      <Text style={S.title}>{item.title}</Text>
      <Text style={S.description}>{item.description}</Text>
      <Text style={S.sponsor}>Contratante: {item.sponsor}</Text>
      <Text style={S.eta}>ETA: {item.eta} horas</Text>
    </TouchableOpacity>
  );

  return (
    <Container headerTitle="Inicio" shouldBack={false}>
      <TouchableOpacity
        style={S.userCard}
        onPress={() => setIsProfileModalOpen(!isProfileModalOpen)}
      >
        <Image source={{ uri: user?.imageUrl }} style={S.userAvatar} />
        <View style={S.textContainer}>
          <Text style={S.greetings}>Bem vindo,</Text>
          <Text style={S.userName}>{user?.fullName}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: "75%",
          width: "98%",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        {jobs && jobs.length > 0 ? (
          <FlatList
            data={jobs}
            renderItem={renderJobItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={S.listContainer}
          />
        ) : (
          <TouchableOpacity
            style={S.jobItem}
            onPress={() => handleNavigation("")}
          >
            <Text style={S.title}>Ops ! Nenhum orçamento encontrado</Text>
            <Text style={S.description}>
              Parece que voce ainda não fez nenhum orçamento.
            </Text>
            <Text style={S.description}>
              Clique aqui para criar um novo orçamento.
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialIcons name="add" size={24} color={colors.primary} />
              <Text style={S.title}>Adicionar um novo trabalho</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <CustomModal
        height={200}
        visible={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(!isProfileModalOpen)}
      >
        <View style={S.buttonContainer}>
          <Button
            text={"Ver perfil"}
            backgroundColor={colors.highlight}
            textColor={colors.white}
            icon="person"
          />
        </View>
        <View style={S.buttonContainer}>
          <Button
            text={"Sair"}
            backgroundColor={colors.danger}
            textColor={colors.white}
            onPress={() => signOut()}
            icon="exit"
          />
        </View>
      </CustomModal>

      <TouchableOpacity
        style={S.floatingButton}
        onPress={() => handleNavigation("")}
      >
        <MaterialIcons name="add" size={28} color={colors.white} />
      </TouchableOpacity>
    </Container>
  );
}
