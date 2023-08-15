
const getAllCategories =async () => {
  const res=await fetch("http://localhost:5000/categories",{
    catch:"force-catch"
  });
  return res.json()
};

export default getAllCategories;