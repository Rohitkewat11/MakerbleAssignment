import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import React from "react"
import "../MakerbleHome/MakerbleHome.css";
import { MakerbleBody } from "../MakerbleHome/MakerbleBody";
import {MakerblePost} from "../MakerbleHome/MakerblePost";
import { MakerbleProject} from "../MakerbleHome/MakerbleProjects";
import { MakerbleAlbums } from "../MakerbleHome/MakerbleAlbums";
import { MakerbleOrganisation} from "../MakerbleHome/MakerbleOrganisations";
import { MakerbleBoards } from "../MakerbleHome/MakerbleBoards";

export function MakerbleIndex(){
    return(
        <div className="container-fluid">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MakerbleBody/>}>
                    <Route path="post" element={<MakerblePost/>}></Route>
                    <Route path="project" element={<MakerbleProject/>}></Route>
                    <Route path="Albums" element={<MakerbleAlbums />}></Route>
                    <Route path="organisation" element={<MakerbleOrganisation />}></Route>
                    <Route path="boards" element={<MakerbleBoards />}></Route>
                </Route>
                <Route path="*" element={<><h3>Requested Page Not Found....</h3></>} />
            </Routes>
        </BrowserRouter>
        </div>
        
    )
}
