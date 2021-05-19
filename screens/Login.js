import React, {useState} from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Alert,
    Image,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = (props) => {
    const [email, Setemail] = useState()
    const [password, SetPassword] = useState()
    const [loading, setLoading] = useState(
        loadingLogin=false
    )

    const AuthLogin = async () =>{ //async digunakan agar code berjalan per baris, saling nunggu
        try {
            setLoading({
                loadingLogin:true
            })
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD33IUbHx1EEpivxBuql-rM7kpPDdp6gBw',{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password: password,
                    returnSecureToken:true
                })
            })
            const resData = await response.json()
            if(response.ok){
                await props.navigation.navigate('container')
            }else{
                Alert.alert('An Error Occured:', resData.error.message, [{
                    text:'Okay'
                },
            ]);
            }
            setLoading({
                loadingLogin:false
            })
        } catch (error) {
            console.log(error)
            setLoading({loadingLogin:false})
        }
        
    };
    
    return(
        <SafeAreaView 
            style={{paddingHorizontal:20, flex: 1, backgroundColor:'white'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                    <Image
                    source={require("../assets/login.png")}
                    resizeMode="center"
                    style={styles.image}
                    />
                    <Text style={styles.textTitle}>Welcome back</Text>
                    <Text style={styles.textBody}>Log in to your existant account</Text>
                    </View>
                    {/*</View><View style={{flexDirection:'row', marginTop: 40}}>
                        <Text style={{fontWeight: 'bold', fontSize: 22, color:'#000'}}>
                            Cafe
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 22, color:'#64beff'}}>
                            BALAM
                        </Text>
                    </View>
                    <View style={{marginTop: 70}}>
                        <Text style={{fontSize: 27, fontWeight: 'bold', color: '#000'}}>
                            Welcome Back,
                        </Text>
                        <Text style={{fontSize: 19, fontWeight: 'bold', color: '#a5a5a5'}}>
                            Sign in to continue
                        </Text>
                    </View>*/}
                    <View style={{marginTop:20}}>
                        <View style={styles.inputContainer}>
                            <Icon 
                                name="mail-outline"
                                size={20}
                                color='#a5a5a5'
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email.."
                                placeholderTextColor="#c0c0c0"
                                onChangeText={(text) => {
                                    Setemail(text)
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                        <Icon 
                                name="lock-outline"
                                size={20}
                                color='#a5a5a5'
                                style={styles.inputIcon}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            placeholder="Password.."
                            placeholderTextColor="#c0c0c0"
                            onChangeText={(text) => {
                                SetPassword(text)
                            }}
                        />
                        </View>
                        <TouchableOpacity 
                            style={styles.btnPrimary}
                            onPress={AuthLogin}>
                            {loading.loadingLogin ? <ActivityIndicator size="small" colors="#835858"/>:
                            <Text style={styles.LoginText}>
                                Signin
                            </Text>}
                        </TouchableOpacity>    
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "flex-end",
                            justifyContent: "center",
                            marginTop: 40,
                            marginBottom: 20
                        }}
                    >
                        <Text style={{color:'#000', fontWeight: 'bold'}}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => 
                                props.navigation.navigate('Register')
                            }
                        >
                            <Text style={[styles.textBody, { color: "blue" }]}>
                                SignUp
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:400,
        height:250,
        marginVertical:10,
        borderRadius: 110
    },
    textTitle:{
        fontSize:30,
        marginVertical:10,
        fontWeight:'bold',
    },
    textBody:{
        fontSize:15
    },
    /*Logo:{
        fontWeight:'bold',
        fontSize:50,
        color:'#fb5b5a',
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },*/
    inputText:{
        height:50,
        color:'white',
    },
    LoginText:{
        color:'white'
    },
    input:{
        color:'#835858',
        paddingLeft: 30,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18
    },
    inputContainer:{
        flexDirection: 'row',
        marginTop: 20
    },
    inputIcon:{
        marginTop: 5,
        position: 'absolute'
    },
    btnPrimary:{
        backgroundColor: '#835858',
        height: 50,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
});

export default Login;
