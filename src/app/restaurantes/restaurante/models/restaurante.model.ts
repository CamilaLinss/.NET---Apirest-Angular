
export interface Restaurante{

    // !! Mesmos nomes dos campos que estão no meu db.json (banco de dados mockado em conjunto com json-server)
    name:string
    rating:number
    //com ? eu defino um atributo opcional
    about?:string
    imagePath:string
    category:string

}