import React from 'react';
import { ActivityIndicator, Text, TextInput, View } from 'react-native';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import { useAuth } from '../../context/AuthContext';
import margin from '../../styles/margin';
import { styles } from './styles';

export default function Login() {
    const { state, login } = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState<{ username?: string; password?: string }>({});
    console.log('Auth State:', state.loginError);
    const validate = () => {
        const newErrors: { username?: string; password?: string } = {};

        if (!username) {
            newErrors.username = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(username)) {
                newErrors.username = 'Invalid email address';
            }
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async () => {
        if (validate()) {
            await login({
                "username": username,
                "password": password
            });
        }
    };

    return (
        <Container customStyles={styles.container}>
            <CustomStatusBar />
            <Text style={styles.title}>LOGIN</Text>
            <View style={margin.mb20}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onBlur={validate}
                />
                {errors.username && <Text style={styles.error}>{errors.username}</Text>}
            </View>
            <View style={margin.mb20}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    onBlur={validate}
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
            {state.loginError && <Text style={[styles.error, margin.mb20]}>{state.loginError?.message ?? 'Unknown error'}</Text>}
            {
                state.loading ? <ActivityIndicator testID='activity-indicator' size="large" /> :
                    <CustomButton title="Log in" onPress={handleLogin} customStyles={margin.mt8} />
            }

        </Container>
    );
}

