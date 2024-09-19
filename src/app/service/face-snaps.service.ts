import { Injectable } from "@angular/core";
import { Facesnap } from "../models/face-snap";
import { errorContext } from "rxjs/internal/util/errorContext";
import { SnapType } from "../models/snap-type.type";

// ** Décorateur @Injectable
// ** Il faut enregistrer cette service à la racine l'application
// ** Comme ça, on est sure d'avoir, une seul instance de service
@Injectable({
    providedIn : 'root'
})

export class FaceSnapsService {
    private facesnap : Facesnap[] = [
        new Facesnap(
            'Batimax',
            'Le meilleur entreprise',
            new Date(),
            14,
            'https://www.photo-paysage.com/displayimage.php?pid=7382&fullsize=1'
        ),
        new Facesnap(
            'Nageur',
            'Nageur le plus rapide du 2024',
            new Date(),
            38,
            'https://pixabay.com/get/g0dfbab758fab9c361a817375293629ce3d29b6e05aa6b343c9e5a4c156e8159eaf683917aa17feef935ccc992ada74e03429097217247916ad15e766e4243787_1280.jpg'
        ),
        new Facesnap(
            'Terre 2047',
            '',
            new Date(),
            157,
            'https://pixabay.com/get/g13d530c617ab7494650dbcf2239b2ed6891cb7c05fc7ab16e3f0e89dc69282850113ca6ebdb89fd68c46209edfa6aac1de347dcb33f3e9b740b7514617a5d467_1280.jpg'
        ),
        new Facesnap(
            'Muffin',
            'Recette du jour',
            new Date(),
            90,
            'https://pixabay.com/get/g6b3973460da887e8c289fa1517833c974bb8ab8d1da0f357e069bbffc2c0565e4f4c97053331ab9e0841f1a02242cf312a99f545a4e00ba46c7f21a74e6ac6e2_1280.jpg'
        )
    ]

    getFaceSnap(): Facesnap[] {
        return [...this.facesnap]
    }

    findFaceSnapById(faceSnapId : string) : Facesnap{
        for (const element of this.facesnap){
            if (element.id === faceSnapId){
                return element
            }
        }
        throw new Error("FaceSnap not found!")
    }

    snapFaceSnapById(faceSnapId : string,snapType : SnapType) : void {
        const currentFaceSnap = this.findFaceSnapById(faceSnapId)
        if (!currentFaceSnap){
            throw new Error("FaceSnap not found!")
        } 
        if (snapType === "snap"){
            currentFaceSnap.addSnap();
        }
        if (snapType === "unsnap"){
            currentFaceSnap.removeSnap();
        }
    }

    
}