
const loadDashboardProducts = async() => {
    const res=await fetch(`http://localhost:5000/dashboardProducts`)
    return res.json();
};

export default loadDashboardProducts;