const fs = require('fs');

const raw_input = require('readline-sync').question;
input=raw_input("enter what you want")

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=3a20d3800e1540e8a3f6fb331e91f796"
function getFirstApi(url) {
    const axios = require('axios')
    var response = axios.get(url)
    return response

}
data=getFirstApi(baseUrl)

data.then((data1) =>{
    res=data1["data"]
    data=res["coord"]
    return data
})
.then((data) =>{
    lon=data["lon"]
    lat=data["lat"]

    url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=3a20d3800e1540e8a3f6fb331e91f796"
    data=getFirstApi(url)
    return data
})
.then((res)=>{
    var detail={};
    resData=res.data
    weather=resData["weather"]

    detail["weatherId"]=weather[0]["id"]
    detail["status"]=weather[0]["main"]
    detail["description"]=weather[0]["description"]
    detail["CityId"]=resData["id"];
    detail["CityName"]=resData["name"]
    console.log(detail)
    console.log(detail)
})
.catch((data)=>{
    console.log("errro")
} );