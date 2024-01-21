import {IHeaderTypes} from "./header.types.ts";

export function Header({link, buildName, imgPerfil, namePerfil}:IHeaderTypes) {
   return(
      <div className={"header"}>
         <div className={"logo"}>
            <div className={"image"}>
               <img className={"logoImg"} src={link} alt={buildName}/>
            </div>
            <h2>{buildName}</h2>
         </div>
         <div className={"headerPerfil"}>
            <img className={"imgPerfil"} src={imgPerfil} alt={namePerfil}/>
         </div>
         <div className={"menuBar"}>

         </div>
      </div>
   )
}
