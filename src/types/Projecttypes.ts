import React from "react";

export interface ProjectCardProtocol{
    title : string; 
    skills : Array<String>;
    description? : string;
    icon : React.ReactElement;
    isFinalize? : boolean;
    repositoryLink? : string
}