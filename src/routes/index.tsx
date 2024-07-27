import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import {gluestackUIConfig} from '../../config/gluestack-ui.config'
import { Box } from '@gluestack-ui/themed'
export function Routes(){
    // Definindo o tema do React Navigation com as configurações do Gluestack UI
    const theme = DefaultTheme
    theme.colors.background = gluestackUIConfig.tokens.colors.gray700

    return (
        <Box flex={1} bg='$gray700'>
        <NavigationContainer theme={theme}>
            <AuthRoutes />
        </NavigationContainer>
        </Box>
    )
 
}