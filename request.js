const key='db885e2d28c7424de4613e776f095cc0';

const baseURL='http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=db885e2d28c7424de4613e776f095cc0';


const requestCity=async(city)=>{
    const baseURL='http://api.openweathermap.org/data/2.5/weather';
    const query=`?q=${city}&appid=${key}`;

    const response=await fetch(baseURL+query);

    const data=await response.json();
    return data;
}
