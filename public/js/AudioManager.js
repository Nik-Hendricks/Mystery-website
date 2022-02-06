//AudioManager.js nik 2-4-2022
var audio_tracks = []





setTimeout(() => {
    
}, 350);


const AudioManager = {
    add_track(name, track){
        audio_tracks[name] = new Audio(track)
    },

    play_track(name){
        audio_tracks[name].play();
    },

    pause_track(name){
        audio_tracks[name].pause();
    },

    queue_next(){

    },

    queue_previous(){

    },
}

const AudioManagerSingleton = AudioManager;

window.AudioManager = AudioManagerSingleton // web

export default window.AudioManager // this will initialise the singleton instantly