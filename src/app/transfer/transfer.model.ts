import { Rekening } from "../rekening/rekening.model";

export class Transfer{
    constructor(
        public sumberRekening : Rekening,
        public tujuanRekening : Rekening,
        public nilai : Number,
        public berita : String
    ){

    }
}