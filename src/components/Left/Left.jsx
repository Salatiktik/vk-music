import { Image, ImageBase } from "@vkontakte/vkui";
import classes from "./Left.module.css";
import { Icon20GraphOutline } from '@vkontakte/icons';

export const Left = ({poster, isPlaying, ...props})=>{
    return(
        <Image size={40} borderRadius="m" src={poster} >
            {
                isPlaying && 
                <Image.Overlay visibility="always" theme="dark" >
                    <Icon20GraphOutline fill="white"/>
                </Image.Overlay>
            }
        </Image>
    )
}