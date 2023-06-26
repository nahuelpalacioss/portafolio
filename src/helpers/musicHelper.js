
import { useState } from "react";

let audio = new Audio('./src/music/03 -Title-Screen.mp3');

export const musicHelper = () => {
  
    const [music, setMusic] = useState(true)

    const onHandleMusic = () => {

        setMusic( !music );

    }

    music ? audio.play() : audio.pause();

    return {

        music,
        onHandleMusic

    }

}

