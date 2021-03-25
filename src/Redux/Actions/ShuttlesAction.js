import Axios from 'axios'
import {urlAPI} from './../../Supports/Constants/urlAPI'

export const getShuttleLists = (departure, arrival) =>{
    return(dispatch) => {

        Axios.get(urlAPI + `/shuttles?from=${departure}&to=${arrival}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_LISTS_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'GET_DATA_LISTS_FAILED',
                    payload: err
                }
            )
        })

    }
}

export const getShuttleDetail = (id) => {
    return(dispatch) => {

        Axios.get(urlAPI + `/shuttles/${id}`)
        .then((res) => {
            let data = res.data
            
            Axios.get(urlAPI + `/facility`)
            .then((response) => {
                let resultFacility = response.data

                let arrFacility = []
                for(let i=0; i < resultFacility.length; i++){
                    if(data.facility.includes(resultFacility[i].id)){
                        arrFacility.push(resultFacility[i])
                    }
                }

                data.facility = arrFacility

                dispatch(
                    {
                        type: 'GET_DATA_DETAIL_SUCCESS',
                        payload: data
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }
}





// // 1. Get Detail Shuttle
// {"class": "Executive", "facility": [1, 3, 5], "from": "Bandung", "id": 4, "image1": "https://st.redbus.in/bo-images/IDN/WM/17869/1278/FR/L/RacWsg.jpeg", "image2": "https://st.redbus.in/bo-images/IDN/WM/17869/1278/SI/L/a8cjI4.jpeg", "image3": "https://st.redbus.in/bo-images/IDN/WM/17869/1278/SI/L/ntA5cb.jpeg", "name": "Jackal Holiday", "price": 125000, "seat": ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B"], "to": "Tangerang", "type": "Travel"}
// detailShuttle.facility

// // 2. Get All Facility : 5 Data
// [{"facility": "Air Conditioning", "id": 1, "image": "https://www.flaticon.com/svg/vstatic/svg/1530/1530297.svg?token=exp=1616258543~hmac=67766a5547b649ed08e5a93c9672fb41"}, {"facility": "Toilet", "id": 2, "image": "https://www.flaticon.com/svg/vstatic/svg/887/887352.svg?token=exp=1616258658~hmac=daa8958cb5967aec95c8f0812b083c0b"}, {"facility": "Reclining Seat", "id": 3, "image": "https://www.flaticon.com/svg/vstatic/svg/1595/1595275.svg?token=exp=1616258788~hmac=37749498556f1f0731cc8bb3ce7b7fcc"}, {"facility": "Snack/Food", "id": 4, "image": "https://www.flaticon.com/svg/vstatic/svg/77/77321.svg?token=exp=1616258947~hmac=4ccc6a6cae131296db6f5b85a5702928"}, {"facility": "Lugage Storage", "id": 5, "image": "https://www.flaticon.com/svg/vstatic/svg/4164/4164916.svg?token=exp=1616259493~hmac=835794a1b4400b6eed7a34b61ddc4a07"}]\

// let arrFacility = null
// for(let i=0; i < allFalicity.length; i++){
//     if(detailShuttle.facility.includes(allFalicity[i].id)){ // id: 1
//         arrFacility.push(allFalicity[i])
//     }
// }

// // arrFacility
// // looping 1
// {
//     "id": 1,
//     "facility": "Air Conditioning",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/1530/1530297.svg?token=exp=1616258543~hmac=67766a5547b649ed08e5a93c9672fb41"
//   }

// //   looping 3
// {
//     "id": 1,
//     "facility": "Air Conditioning",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/1530/1530297.svg?token=exp=1616258543~hmac=67766a5547b649ed08e5a93c9672fb41"
//   }
// {
//     "id": 3,
//     "facility": "Reclining Seat",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/1595/1595275.svg?token=exp=1616258788~hmac=37749498556f1f0731cc8bb3ce7b7fcc"
//   },

// //   looping 5
// {
//     "id": 1,
//     "facility": "Air Conditioning",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/1530/1530297.svg?token=exp=1616258543~hmac=67766a5547b649ed08e5a93c9672fb41"
//   }
// {
//     "id": 3,
//     "facility": "Reclining Seat",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/1595/1595275.svg?token=exp=1616258788~hmac=37749498556f1f0731cc8bb3ce7b7fcc"
//   },
// {
//     "id": 5,
//     "facility": "Lugage Storage",
//     "image": "https://www.flaticon.com/svg/vstatic/svg/4164/4164916.svg?token=exp=1616259493~hmac=835794a1b4400b6eed7a34b61ddc4a07"
//   }

//   detailShuttle.facility = [1, 3, 5]
//   detailShuttle.facility = arrFacility
//   [
//     {
//         "id": 1,
//         "facility": "Air Conditioning",
//         "image": "https://www.flaticon.com/svg/vstatic/svg/1530/1530297.svg?token=exp=1616258543~hmac=67766a5547b649ed08e5a93c9672fb41"
//       }
//     {
//         "id": 3,
//         "facility": "Reclining Seat",
//         "image": "https://www.flaticon.com/svg/vstatic/svg/1595/1595275.svg?token=exp=1616258788~hmac=37749498556f1f0731cc8bb3ce7b7fcc"
//       },
//     {
//         "id": 5,
//         "facility": "Lugage Storage",
//         "image": "https://www.flaticon.com/svg/vstatic/svg/4164/4164916.svg?token=exp=1616259493~hmac=835794a1b4400b6eed7a34b61ddc4a07"
//       }
//   ]