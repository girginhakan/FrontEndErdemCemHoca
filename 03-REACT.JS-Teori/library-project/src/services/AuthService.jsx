import axios from "axios";



const AuthService={
    login: async (username,password)=>{
        const url="https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url,{
            email:username,
            // password:password javascriptin gönderdiğim veri adı ile beklenen aynı ise birisini yazmak yeterli
            password
        })//giriş başarılı ise tokenleri döner.(access ve refresh)
        console.log(response);
        if (response.data.access_token) {
            localStorage.setItem("user",JSON.stringify(response.data))
            //giriş başarılı iselocalStorage a tokenleri kaydet.
        }
        return response.data;
    },
    // logout:
    logout:()=>{
        localStorage.removeItem("user");
        //login durumunda localstorage a kaydedilen tokeni siler. Async yapmamamızın sebebi gerek olmadığı için
    }
}
export default AuthService;