import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";
import BackgroundImg from "../assets/background.png";
import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigator.navigate("SignUp");
  }
  return (
    // VSTACK is a stack layout component that arranges its children vertically.
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="$gray700">
        <Image
          source={BackgroundImg}
          w={"$full"}
          h={624}
          defaultSource={BackgroundImg} // Image to be displayed when the source is not available
          alt="Pessoas treinando"
          position="absolute" // Posição do componente na tela
        />
        <VStack flex={1} px={"$10"} pb={"$16"}>
          <Center my={"$24"}>
            <Logo />
            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente o seu corpo
            </Text>
          </Center>
          <Center gap={"$2"}>
            <Heading color="$gray100">Acessa a conta</Heading>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Acessar" />
          </Center>
          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
