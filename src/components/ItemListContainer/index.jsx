function Product(props) {
    return <li>{props.name}</li>;
  }


function ItemListContainer() {
   return (
        <ul>
        <Product name="Produto 01" />
        <Product name="Produto 02" />
        <Product name="Produto 03" />
        <Product name="Produto 04" />
        <Product name="Produto 05" />
        </ul>
    )
  }
  
  export default ItemListContainer;