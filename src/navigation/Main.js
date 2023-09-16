import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Tabs from './Tabs'
import Navigate from './Navigate'
import { addMyProducts } from '../reduxToolkit/MyProductSlice/MyProductSlice'
import { TmdbKey } from '../Components/Baseurl/BaseUrl'
import { addMovieProducts } from '../reduxToolkit/MovieProductSlice/MovieProductSlice'


const Main = () => {

    const dispatch=useDispatch();
    const [tvData, settvData] = useState('')
    const [movieData, setMovieData] = useState('')


    console.log(tvData,'GHTG')
   //for tv shows
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + TmdbKey, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            // "Authorization": "token " + userToken
          },
        }).then((result) => {
          result.json().then((res) => {
            // console.log(res)
            settvData(res.results)
            res.results.map((item)=>{
                dispatch(addMyProducts(item))
            })
          })
        }).catch((err) => {
          console.log(err)
        })
      }, [])

      //for moveis add
      useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=" + TmdbKey, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            // "Authorization": "token " + userToken
          },
        }).then((result) => {
          result.json().then((res) => {
            // console.log(res)
            setMovieData(res.results)
            res.results.map((item)=>{
                dispatch(addMovieProducts(item))
            })
          })
        }).catch((err) => {
          console.log(err)
        })
      }, [])

  return (
    <Navigate/>
  )
}

export default Main

const styles = StyleSheet.create({})