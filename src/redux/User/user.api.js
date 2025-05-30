import axios from "axios";


export const getnutriData = async () => {
    let res = await axios.get(
      `http://localhost:8001/nutrient/list`
    );
    return res.data;
};

export const getuserData = async() => {
    let res = await axios.get(
        `http://localhost:8001/userdata`,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res.data;
};

export const addDatadiary = async(data) => {
    let res = await axios.post(
        `http://localhost:8001/userdata/add`,
        data,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res.data;
}

export const deleteDataDiary = async(userId) => {
    let res = await axios.delete(
        `http://localhost:8001/userdata/delete/${userId}`,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res;
}