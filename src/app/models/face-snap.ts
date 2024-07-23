export class Facesnap {
    constructor(public title : string,
                public description : string,
                public creatAt : Date,
                public snap : number,
                public imageuUrl : string){}

    addSnap() : void {
        this.snap++;
    }
    removeSnap() : void {
        this.snap--;
    }
}