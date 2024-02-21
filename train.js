const fetchData = (callback) => {
    const data = {name: "Enzo", age: "21"};
    callback(data);
}; 

const processData = (data) => {
    console.log(data);
};

fetchData(processData)