class ProductManager{
    constructor(){
        this.products=[];
        this.ITemId=1;

    }
    addProduct(ProductInf){
        const Existente=this.products.some((items)=>{
            items.code===ProductInf.code})
        if(Existente){
            console.log('error: ya existe')
            return;
        }
        const productos={
            Id:this.ITemId++,
            title:ProductInf.title,
            description:ProductInf.description,
            price:ProductInf.price,
            thumbnail:ProductInf.thumbnail,
            code:ProductInf.code,
            stock:ProductInf.stock,
            
        };
        this.products.push(productos)
        console.log('agregado')
        console.log(productos)
        
    }
    getProductById(id){
        const prod=this.products.find((produ)=>produ.Id===id);
        if(prod){
            console.log('se encontro');
            console.log(prod)
        }else{
            console.log('Not found'+id)
        }
        
    }

    getProducts(){
        console.log('----productos agregados-----')
        console.log(this.products)
    }

}
const productManager= new ProductManager()
const ProductInf={
    title:'BJ',
    description:'Ropa En Mayoria',
    price:3000,
    thumbnail:'Img',
    code:1,
    stock:30
}
const ProductInf2={
    title:'MF',
    description:'Ropa En Menoria',
    price:4500,
    thumbnail:'Img2',
    code:2,
    stock:32
}

productManager.addProduct(ProductInf)
productManager.addProduct(ProductInf2)
productManager.getProducts()
productManager.getProductById(1)
productManager.getProductById(2)
