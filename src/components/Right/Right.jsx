import { Footnote, IconButton, Image, ImageBase } from "@vkontakte/vkui";
import classes from "./Right.module.css";
import { Icon16MoreVertical, Icon20GraphOutline } from '@vkontakte/icons';
import { useEffect , useState } from "react";

const timeToString = (time, scale)=>{
    let min = Math.floor(time / (60 * scale));
    let sec = Math.round(time / scale - min * 60,2);
    
    if(sec<10)
        sec = "0"+sec;

    return min+":"+sec;
}

export const Right = ({duration, sound, isPlaying, ...props})=>{

    const [currentTime, setCurrentTime] = useState("--:--")

    useEffect(()=>{
        if(duration){
            setCurrentTime(timeToString(duration, 1000));
        }
    },[duration])

    useEffect(()=>{
        if(isPlaying){
            const interval = setInterval(() => {
                if (sound) {
                    setCurrentTime(timeToString(sound.seek([]),1));
                }
              }, 500);
              return () => clearInterval(interval);
        }
    }, [sound, isPlaying])

    return(
        <div className={classes.rightContainer}>
            <Footnote className={classes.time}>
                {currentTime}
            </Footnote>
            <div className={classes.more} onClick={()=>console.log("Привет =)")}>
                <Icon16MoreVertical />
            </div>
        </div>
    )
}