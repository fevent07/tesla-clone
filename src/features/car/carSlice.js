import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", " Model 3", "Model X", "Model Y" ],
    carUrls: [ "/Models","/Models","/Models","/Models" ]
}
 const carSlice = createSlice({

    name: "car",
    Url: "carUrl",
    initialState,
    reducers: {}

 })
 export const selectCars = state => state.car.cars
 export const selectCarsUrl = state => state.car.Url
 export default carSlice.reducer