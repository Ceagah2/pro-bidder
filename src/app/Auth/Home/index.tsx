import { Button } from "@/components/Button";
import CustomModal from "@/components/Modal";
import { colors } from "@/shared/theme";
import { JobsProps } from "@/shared/types/Jobs";
import { jobs } from "@/stub/jobs";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { S } from './styles';

export default function Home(){
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false)
  const {user} = useUser()
  const { signOut } = useAuth()


  const renderJobItem = ({ item } :JobsProps) => (
    <TouchableOpacity style={S.jobItem} onPress={() => console.log('acessando o orcamento nome:', item.title)}>
      <Text style={S.title}>{item.title}</Text>
      <Text style={S.description}>{item.description}</Text>
      <Text style={S.sponsor}>Contratante: {item.sponsor}</Text>
      <Text style={S.eta}>ETA: {item.eta} horas</Text>
    </TouchableOpacity>
  );


  return (
    <View style={S.container}>
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
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={jobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={S.listContainer}
        />
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
    </View>
  );
}