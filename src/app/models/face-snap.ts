export class Facesnap {

    id : string;

    constructor(public title : string,
                public description : string,
                public creatAt : Date,
                public snap : number,
                public imageuUrl : string){
        this.id = crypto.randomUUID().substring(0,8);
    }

    addSnap() : void {
        this.snap++;
    }
    removeSnap() : void {
        this.snap--;
    }
}