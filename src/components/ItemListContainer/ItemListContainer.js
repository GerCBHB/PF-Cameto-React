import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
    const { categoryId } = useParams()
  
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "items");
        getDocs(collectionRef)
            .then((response) => {
            const productsAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProducts(productsAdapted);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [categoryId]);
  
    return (
      <div className="container">
        <h1 className="title">{greeting}</h1>
        <ItemList products={products} />
      </div>
    );
  }
  
  export default ItemListContainer;
  