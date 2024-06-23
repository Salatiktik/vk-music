import { Tappable , Image, Cell } from "@vkontakte/vkui";
import classes from "./Player.module.css";
import useSound from "use-sound";
import { Left } from "../Left/Left";
import { useEffect, useState } from "react";
import { Medium } from "../Medium/Medium";
import { Right } from "../Right/Right";


export const Player = ({song})=>{
    const {poster, audio, information} = song;
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(audio);

    useEffect(()=>{
        if(duration){
            if(isPlaying)
            {
                play();
            }    
            else{
                pause();
            }
        }
    },[isPlaying, duration])

    return(
        <Cell 
            className={classes.playerContainer}
            onClick={()=>setIsPlaying(!isPlaying)}
            before={
                <Left 
                    poster={poster} 
                    isPlaying={isPlaying}
                />
            }
            after={
                <Right sound={sound} duration={duration} isPlaying={isPlaying}/>
            }
        >
            <Medium information={information}/>
        </Cell>
    )
}