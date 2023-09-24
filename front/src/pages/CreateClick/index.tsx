import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { addClick } from '../../services'
import { AddClickModel } from '../../models/add-click'

const CreateClickPage = () => {
  const [searchParams] = useSearchParams()
  const [newClick, setNewClick] = useState<AddClickModel>()

  useEffect(() => {
    searchParams.forEach(value => console.log(value))
    setNewClick({
      idSite: Number(searchParams.get('site_id')),
      siteDomain: searchParams.get('site_domain'),
      thumbnail: searchParams.get('thumbnail'),
      title: searchParams.get('title'),
      timeStamp: JSON.stringify(new Date()),
      platform: searchParams.get('platform'),
      idCampaing: Number(searchParams.get('campaing_id')),
      nameCampaing: searchParams.get('campaing_name'),
      token: searchParams.get('token')
    })
  }, [searchParams])

  useEffect(() => {
    if (newClick) {
      addClick(newClick)
      .then(resp => {
        console.log(resp)
        const redirectUrl = resp.data.domain + `?clickToken=${resp.data.clickToken}`
        window.location.assign(redirectUrl)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [newClick])

  return (
    <>
    </>
  )
}

export default CreateClickPage;
