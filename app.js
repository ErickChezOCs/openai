import {giveKey}  from "./key.js";
const API_KEY = giveKey();
console.log('It works!');
async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization : `Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model: "text-ada-001",
            prompt:"How are you today?",
        })
    })

    const data = await response.json()
    console.log(data)
}

//fetchData()
