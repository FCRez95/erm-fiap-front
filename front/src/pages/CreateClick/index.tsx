import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { addClick } from '../../services'
import { AddClickModel } from '../../models/add-click'

const CreateClickPage = () => {
  const [searchParams] = useSearchParams()
  const [newClick, setNewClick] = useState<AddClickModel>()
  const [clickAuther, setClickAuther] = useState<String | null>('')

  useEffect(() => {
    searchParams.forEach(value => console.log(value))
    setClickAuther(searchParams.get('click_auther'))
    setNewClick({ 
      siteOrigin: searchParams.get('site_domain'),
    })
  }, [searchParams])

  useEffect(() => {
    if (newClick) {
      addClick(newClick, clickAuther)
      .then(resp => {
        console.log(resp)
        const redirectUrl = resp.data.siteOrigin
        window.location.href = "http://" + redirectUrl
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [newClick, clickAuther])

  return (
    <>
    </>
  )
}

export default CreateClickPage;
