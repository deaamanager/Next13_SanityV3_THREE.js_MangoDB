"use client"

import config from '../../../../sanity.config'
import {NextStudioLoading} from 'next-sanity/studio/loading'

 const Loading = () => {
  return <NextStudioLoading config={config} />
}

export default Loading;