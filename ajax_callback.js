function makeAjaxCall(url, methodType)
{
    let promiseObj = new Promise(function(resolve, reject)
    {
        console.log(url);
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(methodType, url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function()
        {
            if (xmlhttp.readyState === 4)
            {
                if (xmlhttp.status === 200)
                {
                    console.log("xmlhttp done successfully");
                    let serverResponse = xmlhttp.responseText; //server antwoord met string
                    console.log(serverResponse);
                    resolve(serverResponse); //wordt via return promiseObj teruggeven
                }
                else
                {
                    reject(xmlhttp.status);
                    console.log("xmlhttp failed");
                }
            }
            else
            {
                console.log("xmlhttp failed");
            }
        }
        console.log("request sent succesfully");
    });
    return promiseObj;
}

function errorHandler(statusCode)
{
    console.log("failed with status", status);
}

function getWeather2()
{
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather2(JSONresponseFromAjax)
{
    let weatherObject = JSON.parse(JSONresponseFromAjax); //convert Json string => Object
    let completeData = ""; //maak een lege string
    for (const [key, value] of Object.entries(weatherObject.liveweer[0]))
    {
        console.log(`${key}: ${value}`);
        completeData += key + " : " + value +"<br>";
        result.innerHTML = completeData; //string printen naar browser
    }
}