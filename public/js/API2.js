//api2.js
const root_url = '/API'
var store_items = [];

function _setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function _getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function http_fetch(url, data, method){
    return new Promise(resolve => {
        var opts = {
            	method: method,
                headers: {'Content-Type': 'application/json'}
            }

        if(method == "POST"){
            opts.body = JSON.stringify(data);
        }
        fetch(`${url}`, opts).then(response => response.json())
                .then((data) => {
                    resolve(data)
            })
    })
}

function _purgeCookies(){
    var cookies = document.cookie.split(";");
    for(var i = 0; i <= cookies.length; i++){
        var cookie_name = String(cookies[i]).split("=")[0]
        eraseCookie(cookie_name);
    }
}

function _eraseCookie(name) {
    document.cookie = name + '=; Max-Age=0'
}


function _send_sql(sql){
    return new Promise(resolve => {
        http_fetch(`${root_url}/send_sql`, {sql: sql}, "POST").then(res => {
            resolve(res)
        })
    })
}

function reloadAPI(){

}

function loadAPI(){
    window.DP.dispatch('API_LOAD');
    
    
}

setTimeout(() => {
    loadAPI();
}, 350);


const API2 = {
    getCookie(cookie){
        return _getCookie(cookie)
    },

    setCookie(cookie, value){
        _setCookie(cookie, value)
    },
 
    loadAPI(){
        loadAPI()
    },

    reloadAPI(){
        reloadAPI();
    },

    uniqid(prefix = "", random = false) {
        const sec = Date.now() * 1000 + Math.random() * 1000;
        const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
        return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
    },

    in_array(check, arr){
        for(var key in arr){
            if(arr[key] = check){
                return true
            }
        }
        return false
    },

    send_sql(sql){
        return new Promise(resolve => {
            _send_sql(sql).then(res => {
                resolve(res)
            })
        })
    }
}

const API2Singleton = API2;

window.API2 = API2Singleton // web

export default window.API2 // this will initialise the singleton instantly