// Tipagens:


export interface Note {
    id: number;
    text: string;
    date: Date;
    urgent?: boolean; // ? indica que eh opcional  
}