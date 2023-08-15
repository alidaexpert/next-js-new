
const getAllCateProducts =async (id) => {
    const res=await fetch(`http://localhost:5000/products?category=${id}`,{
        catch:"force-catch"
      });
      return res.json()
};

export default getAllCateProducts;