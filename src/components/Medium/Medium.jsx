import { Footnote , Headline } from "@vkontakte/vkui";
import classes from "./Medium.module.css";


export const Medium = ({information, ...props})=>{
    return(
        <div className={classes.mediumContainer}>
            <Headline level="1" className={classes.title}>  
                {information.singer}
            </Headline>
            <Footnote className={classes.subtitle}> 
                {information.song}
            </Footnote>
        </div>
        
    )
}