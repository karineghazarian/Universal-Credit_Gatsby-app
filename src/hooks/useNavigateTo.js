import React, { useEffect } from "react"
import { navigate } from "gatsby"

const useNavigateTo = route => {
  useEffect(() => {
    if (typeof window !== "undefined" && route) {
      navigate(route)
    }
  }, [route])
}

export default useNavigateTo
